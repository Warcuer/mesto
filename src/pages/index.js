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

//инстанс класса для профиля
const userInfo = new UserInfo({
  profileUserName: editName,
  profileAboutUs: editWork,
});

//инстанс класса для попапа профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: popupProfile,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
});
popupEditProfile.setEventListeners();

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
popupAddCard.setEventListeners();

//ОТКРЫТЬ ПОПАП ПРОФИЛЯ
profileOpenEdit.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  name.value = data.name;
  aboutUs.value = data.aboutUs;
  popupEditProfile.open();
});
//ОТКРЫТЬ ПОПАП ДОБАВЛЕНИЯ КАРТОЧКИ
cardOpenEdit.addEventListener('click', () => {
  cardValidity.this._toggleButtonValidity();
  popupAddCard.open();
});
//ОТКРЫТЬ ПОПАП КАРТИНКИ
const popupOpenImage = new PopupWithImage(popupImage);
popupOpenImage.setEventListeners();
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

//ВАЛИДАЦИЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const profileValidity = new FormValidity(validationConfig, popupProfile);
profileValidity.enableValidation();
//ВАЛИДАЦИЯ СОЗДАНИЯ КАРТОЧКИ
const cardValidity = new FormValidity(validationConfig, popupCard);
cardValidity.enableValidation();