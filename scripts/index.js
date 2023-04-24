import { initialCards } from "./card.js";
import { validationConfig } from "./validate.js";

const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card')
const popupImage = document.querySelector('.popup-image')
const popupFormProfile = popupProfile.querySelector('.popup__case_profile');
const popupFormCard = popupCard.querySelector('.popup__inputs_card');

const profileOpenEdit = document.querySelector('.profile__edit-buttom');
const profileSaveEdit = popupProfile.querySelector('.popup__save_profile');

const cardOpenEdit = document.querySelector('.profile__add-button');
const cardSaveEdit = popupCard.querySelector('.popup__save_card');

const imageCard = document.querySelector('.popup-case__image')
const imageSign = document.querySelector('.popup-case__sing')

const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputWork = popupProfile.querySelector('.popup__input_type_work');
const inputTitle = popupCard.querySelector('.popup__input_type_title');
const inputLink = popupCard.querySelector('.popup__input_type_link');

const editName = document.querySelector('.profile__name');
const editWork = document.querySelector('.profile__work');

const cross = document.querySelectorAll('.popup__close');
const escapeKey = 27;

// ЗАКРЫТИЕ ПО КНОПКЕ ESCAPE
function handlEsc(evt) {
  if (evt.keyCode === escapeKey) {
    closePopup(document.querySelector('.popup_open'));
  };
};
// ЗАКРЫТИЕ ПО КЛИКУ НА ОВЕРЛЕЙ
function handlMouseLeftClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
};

// ОТКРЫТЬ POPUP
const openPopup = (popup) => {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', handlEsc);
  document.addEventListener('mousedown', handlMouseLeftClick)
};
// ЗАКРЫТЬ POPUP
const closePopup = (popup) => {
  popup.classList.remove('popup_open');
  document.addEventListener('keydown', handlEsc);
  document.addEventListener('mousedown', handlMouseLeftClick)
};
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

  renderCardElement(createCardElement(cardAdd))
  closePopup(popupCard);
  popupFormCard.reset();
  disabledSubmitButton(popupCard);
});

const cardTemplate = document.getElementById('card-template')
const cardBox = document.querySelector('.elements')

// Создание карточки
const createCardElement = (cardDate) => {
  const cardElements = cardTemplate.content.querySelector('.element').cloneNode(true);

  const cardTitle = cardElements.querySelector('.element__title');
  const cardImg = cardElements.querySelector('.element__image');

  cardTitle.textContent = cardDate.name;
  cardImg.src = cardDate.link;
  cardImg.alt = cardDate.name;

  const cardLike = cardElements.querySelector('.element__like')
  const cardDelete = cardElements.querySelector('.element__basket')

  cardElements.querySelector('.element__image').addEventListener('click', () => addOpenImage(cardDate))

  const handelLike = () => {
    cardLike.classList.toggle('element__like_active')
  }
  const handelDelete = () => {
    cardElements.remove();
  }

  cardLike.addEventListener('click', handelLike)
  cardDelete.addEventListener('click', handelDelete)

  return cardElements;
};

function addOpenImage(cardDate) {
  imageCard.src = cardDate.link;
  imageCard.alt = cardDate.name;
  imageSign.textContent = cardDate.name;
  openPopup(popupImage);
};

// Добавление карточки в начало блока
const renderCardElement = (cardElements) => {
  cardBox.prepend(cardElements);
};
// Проход по массиву с помощью метода ForEach
initialCards.forEach((initialCards) => {
  renderCardElement(createCardElement(initialCards));
});

// Условие для закрытия по "крестику"
function closeCross() {
  cross.forEach(button => {
    const buttonPopup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(buttonPopup));
  });
};
closeCross();