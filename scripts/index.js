// import { initialCards } from "./card.js";

const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card')
const popupImage = document.querySelector('.popup-image')
const popupFormProfile = popupProfile.querySelector('.popup__case_profile');
const popupFormCard = popupCard.querySelector('.popup__case_card');

const profileOpenEdit = document.querySelector('.profile__edit-buttom');
const profileCloseEdit = popupProfile.querySelector('.popup__close_profile');
const profileSaveEdit = popupProfile.querySelector('.popup__save_profile');

const cardOpenEdit = document.querySelector('.profile__add-button');
const cardCloseEdit = popupCard.querySelector('.popup__close_card');
const cardSaveEdit = popupCard.querySelector('.popup__save_card');

const imageCard = document.querySelector('.popup-case__image')
const imageSign = document.querySelector('.popup-case__sing')
const closeImage = document.querySelector('.popup-case__close')

const inputName = popupProfile.querySelector('.popup__input_type_name');
const inputWork = popupProfile.querySelector('.popup__input_type_work');
const inputTitle = popupCard.querySelector('.popup__input_type_title');
const inputLink = popupCard.querySelector('.popup__input_type_link');

const editName = document.querySelector('.profile__name');
const editWork = document.querySelector('.profile__work');

// Условие для закрытия по "крестику"
document.querySelectorAll('.popup__close').forEach(button => {
  const buttonPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonPopup));
})
// ОТКРЫТЬ POPUP
const openPopup = (popup) => {
  popup.classList.add('popup_open');
};
// ЗАКРЫТЬ POPUP
const closePopup = (popup) => {
  popup.classList.remove('popup_open');
};

// Условие для открытия popup профиля
profileOpenEdit.addEventListener('click', () => {
  inputName.value = '';
  inputWork.value = '';
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
  inputTitle.value = '';
  inputLink.value = '';
  renderCardElement(createCardElement(cardAdd))
  closePopup(popupCard);
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

  cardElement.querySelector('.element__image').addEventListener('click', () => addOpenImage(cardDate) )

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

function addOpenImage(cardDate) {
  popupImage.querySelector('.popup-case__image').src = cardDate.link;
  popupImage.querySelector('.popup-case__image').alt = cardDate.name;
  popupImage.querySelector('.popup-case__sing').textContent = cardDate.name;
  openPopup(popupImage);
};

// Добавление карточки в начало блока
const renderCardElement = (cardElement) => {
  cardBox.prepend(cardElement);
};
// Проход по массиву с помощью метода ForEach
initialCards.forEach((initialCards) => {
  renderCardElement(createCardElement(initialCards));
});

