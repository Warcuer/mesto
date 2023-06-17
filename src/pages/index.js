import './index.css';

import Card from '../components/Card.js';
import FormValidity from '../components/FormValidity.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { loading } from '../utils/utils.js'
import {
  validationConfig,
  popupProfile, popupCard,
  popupImage, profileOpenEdit,
  cardOpenEdit, inputName,
  inputWork, editName,
  editWork, popupConfirmClose,
  popupAvatar, openAvatar,
  profileAvatar
} from "../utils/constants.js";

let userId;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: 'ca76459d-172b-41fd-8bd2-96be50a5d9b3',
    'Content-Type': 'application/json'
  }
})

Promise.all([api.getUserData(), api.getInitialsCards()])
  .then(([data, cards]) => {
    userId = data._id;
    userInfo.setUserInfo(data);
    section.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  })

//ОТКРЫТЬ ПОПАП ПОТВЕРЖДЕНИЯ УДАЛЕНИЯ
const popupWithConfirm = new PopupWithConfirm(popupConfirmClose);

//PROFILE inst
const userInfo = new UserInfo({
  userName: editName,
  aboutUs: editWork,
  userAvatar: profileAvatar
});

//POPUP-PROFILE inst
const popupEditProfile = new PopupWithForm({
  popupElement: popupProfile,
  handleFormSubmit: (data) => {
    loading(popupProfile, 'Cохранение...');
    api.setUserData(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(`setDataUser - ${err}`);
      })
      .finally(() => {
        loading(popupProfile, 'Сохранить');
      })
  }
})

//ИЗМЕНИТЬ ФОТО АВАТАРА
const popupUserAvatar = new PopupWithForm({
  popupElement: popupAvatar,
  handleFormSubmit: (data) => {
    loading(popupAvatar, 'Сохранение...');
    api.setUserAvatar(data)
      .then((res) => {
        userInfo.setUserInfo(res)
        setUserAvatar.close();
      })
      .catch((err) => {
        console.log(`setUserAvatar - ${err}`);
      })
      .finally(() => {
        loading(popupAvatar, 'Сохранить')
      })
  }
});
openAvatar.addEventListener('click', () => {
  avatarValidity.resValidity();
  popupUserAvatar.open();
});

//ДОБАВИТЬ КАРТОЧКУ
function createCard(data) {
  const card = new Card({
    data,
    handleCardClick: (name, link) => {
      popupOpenImage.open(name, link);
    },
    handleDeleteClick: () => {
      popupWithConfirm.open();
      popupWithConfirm.submitCallback(() => {
        loading(popupConfirmClose, 'Удаление...');
        api.handleDelete(card.getId())
          .then(() => {
            card.handleDelete();
            popupWithConfirm.close();
          })
          .catch((err) => {
            console.log(`handleDelete - ${err}`);
          })
          .finally(() => {
            loading(popupConfirmClose, 'Да');
          })
      })
    },

    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLike(data);
        })
        .catch((err) => {
          console.log(`handleSetLike - ${err}`);
        });
    },
    handleDeleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLike(data);
        })
        .catch((err) => {
          console.log(`handleDeleteLike - ${err}`);
        });
    },
  }, '#card-template', userId)
  return card.addCard();
};

//РЕНДЕР КАРТОЧЕК ИЗ МАССИВА
const section = new Section({
  renderer: (item) => {
    section.addItem(createCard(item))
  }
}, '.elements');

//ОТКРЫТЬ ПОПАП ПРОФИЛЯ
profileOpenEdit.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputWork.value = data.about;
  popupEditProfile.open();
  profileValidity.resValidity();
});

//ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ
const popupAddCard = new PopupWithForm({
  popupElement: popupCard,
  handleFormSubmit: (data) => {
    loading(popupCard, 'Сохранение...');
    api.addNewCard(data.nameTitle, data.link)
      .then((res) => {
        section.newAddItem(createCard(res));
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(`addNewCard - ${err}`);
      })
      .finally(() => {
        loading(popupCard, 'Создать');
      })
  }
})

//ОТКРЫТЬ ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ
cardOpenEdit.addEventListener('click', () => {
  cardValidity.disabledSubmitButton();
  cardValidity.resValidity();
  popupAddCard.open();
});
//ОТКРЫТЬ ПОПАП КАРТИНКИ
const popupOpenImage = new PopupWithImage(popupImage);

popupEditProfile.setEventListeners();
popupUserAvatar.setEventListeners();
popupAddCard.setEventListeners();
popupOpenImage.setEventListeners();
popupWithConfirm.setEventListeners();

//ВАЛИДАЦИЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const profileValidity = new FormValidity(validationConfig, popupProfile);
profileValidity.enableValidation();
//ВАЛИДАЦИЯ СОЗДАНИЯ КАРТОЧКИ
const cardValidity = new FormValidity(validationConfig, popupCard);
cardValidity.enableValidation();
//ВАЛИДАЦИЯ ИЗМЕНЕНИЯ ФОТО АВАТАРА
const avatarValidity = new FormValidity(validationConfig, popupAvatar);
avatarValidity.enableValidation();