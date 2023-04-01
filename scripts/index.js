// import { initialCards } from "./card.js";

const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card')
const popupFormProfile = popupProfile.querySelector('.popup__case_profile');
const popupFormCard = popupCard.querySelector('.popup__case_card');

const openEditProfile = document.querySelector('.profile__edit-buttom');
const closeEditProfile = popupProfile.querySelector('.popup__close_profile');
const saveEditProfile = popupProfile.querySelector('.popup__save_profile');

const openEditCard = document.querySelector('.profile__add-button');
const closeEditCard = popupCard.querySelector('.popup__close_card');
const saveEditCard = popupCard.querySelector('.popup__save_card');

const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputWork = popupProfile.querySelector('.popup__input_type_work');
const inputTitle = popupCard.querySelector('.popup__input_type_title');
const inputLink = popupCard.querySelector('.popup__input_type_link');

const editName = document.querySelector('.profile__name');
const editWork = document.querySelector('.profile__work');
// ОТКРЫТЬ POPUP
const popupOpen = (popup) => {
  popup.classList.add('popup_open');
};
// ЗАКРЫТЬ POPUP
const popupClose = (popup) => {
  popup.classList.remove('popup_open');
};

// Условие для открытия popup профиля
openEditProfile.addEventListener('click', () => {
  inputName.value = editName.textContent;
  inputWork.value = editWork.textContent;
  popupOpen(popupProfile);
});
// Условие для открытия popup карточки
openEditCard.addEventListener('click', () => {
  // inputTitle.value = '';
  // inputLink.value = '';
  popupOpen(popupCard);
});

// Условие для закрытия popup профиля
closeEditProfile.addEventListener('click', () => {
  popupClose(popupProfile);
});
// Условие для закрытия popup карточки
closeEditCard.addEventListener('click', () => {
  popupClose(popupCard);
});

// Условие для сохранения информации пользователя профиля
popupFormProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  editName.textContent = inputName.value;
  editWork.textContent = inputWork.value;
  
  popupClose(popupProfile);
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
  popupClose(popupCard);
});


const cardTemplate = document.getElementById('card-template')
const cardBox = document.querySelector('.elements')

// Создание карточки
const createCardElement = (cardDate) => {
  const cardElement = cardTemplate.content.querySelector('.element').cloneNode(true);

  const cardTitle = cardElement.querySelector('.element__title');
  const cardImg = cardElement.querySelector('.element__image');

  cardTitle.textContent = cardDate.name;
  cardImg.src = cardDate.link;
  cardImg.alt = cardDate.name;

  const cardLike = cardElement.querySelector('.element__like')
  const cardDelete = cardElement.querySelector('.element__basket')

  const handelLike = () => {
    cardLike.classList.toggle('element__like_active')
  }
  const handelDelete = () => {
    cardElement.remove();
  }

  cardLike.addEventListener('click', handelLike)
  cardDelete.addEventListener('click', handelDelete)

  return cardElement;
};
// Добавление карточки в начало блока
const renderCardElement = (cardElement) => {
  cardBox.prepend(cardElement);
};
// Проход по массиву с помощью метода ForEach
initialCards.forEach((initialCards) => {
  renderCardElement(createCardElement(initialCards));
});

