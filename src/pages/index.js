import './index.css';

import Card from "../components/Card.js";
import FormValidity from "../components/FormValidity.js";
import PopupWithForm from '../components/PopupWhithForm.js';
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  validationConfig,
  popupProfile, popupCard,
  popupImage, popupFormProfile,
  popupFormCard, profileOpenEdit,
  imageCard, imageSign,
  cardOpenEdit, inputName,
  inputWork, inputTitle,
  inputLink, editName,
  editWork, cardBox
} from "../utils/constants.js";
import { openPopup,closePopup} from "../utils/utils.js";

//PROFILE inst
const userInfo = new UserInfo({
  profileUserName: editName,
  profileAboutUs: editWork,
});

//POPUP-PROFILE inst
const popupEditProfile = new PopupWithForm({
  popupSelector: popupProfile,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});

//ДОБАВИТЬ КАРТОЧКУ
const popupAddCard = new PopupWithForm({
  popupSelector: popupCard,
  handleFormSubmit: (input) => {
    const data = {
      name: input.name,
      link: input.link,
    };
    section.addItem(createCard(data));
  },
});

//ОТКРЫТЬ ПОПАП ПРОФИЛЯ
profileOpenEdit.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.userName;
  inputWork.value = data.aboutUs;
  popupEditProfile.open();
});
//ОТКРЫТЬ ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ
cardOpenEdit.addEventListener('click', () => {
  cardValidity.disabledSubmitButton();
  popupAddCard.open();
});
//ОТКРЫТЬ ПОПАП КАРТИНКИ
const popupOpenImage = new PopupWithImage(popupImage);

function createCard(cardData) {
  const card = new Card(
    {
      data: cardData,
      handleCardClick: () => {
        popupOpenImage.open(cardData);
      },
    },
    '#card-template'
  );
  const cardElement = card.addCard();
  return cardElement;
};
//РЕНДЕР КАРТОЧЕК ИЗ МАССИВА
const section = new Section(
  { items: initialCards, renderer: renderCard },
  '.elements'
);
function renderCard(cardData) {
  const cardElement = createCard(cardData);
  section.addItem(cardElement);
};
section.renderItems(initialCards);

popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupOpenImage.setEventListeners();

//ВАЛИДАЦИЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const profileValidity = new FormValidity(validationConfig, popupProfile);
profileValidity.enableValidation();
//ВАЛИДАЦИЯ СОЗДАНИЯ КАРТОЧКИ
const cardValidity = new FormValidity(validationConfig, popupCard);
cardValidity.enableValidation();