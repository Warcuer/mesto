import Card from "./Card.js";
import FormValidity from "./FormValidity.js";
import { initialCards } from "./cards.js";
import { openPopup,closePopup} from "./utils.js";

const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card')
export const popupImage = document.querySelector('.popup-image')
const popupFormProfile = popupProfile.querySelector('.popup__case_profile');
const popupFormCard = popupCard.querySelector('.popup__inputs_card');

const profileOpenEdit = document.querySelector('.profile__edit-buttom');

export const imageCard = popupImage.querySelector('.popup-case__image');
export const imageSign = popupImage.querySelector('.popup-case__sing');

const cardOpenEdit = document.querySelector('.profile__add-button');

const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputWork = popupProfile.querySelector('.popup__input_type_work');
const inputTitle = popupCard.querySelector('.popup__input_type_title');
const inputLink = popupCard.querySelector('.popup__input_type_link');

const editName = document.querySelector('.profile__name');
const editWork = document.querySelector('.profile__work');

// Условие для открытия popup профиля
profileOpenEdit.addEventListener('click', () => {
  inputName.value = editName.textContent;
  inputWork.value = editWork.textContent;
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

const validationConfig = {
  formSelector: '.popup__inputs',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
};

const profileValidity = new FormValidity(validationConfig, popupProfile);
profileValidity.enableValidation();
const cardValidity = new FormValidity(validationConfig, popupCard);
cardValidity.enableValidation();