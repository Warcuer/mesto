import Card from "./Card.js";
import { initialCards } from "./cards.js";
import { openPopup,closePopup,handlMouseLeftClick } from "./utils.js";
import { validationConfig } from "./validate.js";

const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card')
const popupFormProfile = popupProfile.querySelector('.popup__case_profile');
const popupFormCard = popupCard.querySelector('.popup__inputs_card');

const profileOpenEdit = document.querySelector('.profile__edit-buttom');

const cardOpenEdit = document.querySelector('.profile__add-button');

const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputWork = popupProfile.querySelector('.popup__input_type_work');
const inputTitle = popupCard.querySelector('.popup__input_type_title');
const inputLink = popupCard.querySelector('.popup__input_type_link');

const editName = document.querySelector('.profile__name');
const editWork = document.querySelector('.profile__work');

function disabledSubmitButton(popup) {
  const button = popup.querySelector(".popup__save");
  button.classList.add("popup__save_disabled");
  button.setAttribute("disabled", true);
}
// Условие для открытия popup профиля
profileOpenEdit.addEventListener('click', () => {
  inputName.value = editName.textContent;
  inputWork.value = editWork.textContent;
  disabledSubmitButton(popupProfile);
  openPopup(popupProfile);
});
// Условие для открытия popup карточки
cardOpenEdit.addEventListener('click', () => {
  openPopup(popupCard);
});

// Условие для сохранения информации пользователя профиля
popupFormProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  editName.textContent = inputName.value;
  editWork.textContent = inputWork.value;
  closePopup(popupProfile);
});
// Условие для сохранения карточки
popupFormCard.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = inputTitle.value;
  const link = inputLink.value;
  const cardAdd = {
    name,
    link
  };

  renderCardElement(createCard(cardAdd))
  closePopup(popupCard);
  popupFormCard.reset();
  disabledSubmitButton(popupCard);
});

const cardBox = document.querySelector('.elements')

function createCard(data) {
  const card = new Card(data, '#card-template');
  return card.addCard();
}
// Добавление карточки в начало блока
const renderCardElement = (cardElements) => {
  cardBox.prepend(cardElements);
};
// Проход по массиву с помощью метода ForEach
initialCards.forEach((initialCards) => {
  renderCardElement(createCard(initialCards));
});
