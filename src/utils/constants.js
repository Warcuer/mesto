export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  formSelector: '.popup__inputs',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
};

export const popupProfile = document.querySelector('.popup_profile');
export const popupCard = document.querySelector('.popup_card')
export const popupImage = document.querySelector('.popup-image')
export const popupFormProfile = popupProfile.querySelector('.popup__case_profile');
export const popupFormCard = popupCard.querySelector('.popup__inputs_card');

export const profileOpenEdit = document.querySelector('.profile__edit-buttom');

export const imageCard = popupImage.querySelector('.popup-case__image');
export const imageSign = popupImage.querySelector('.popup-case__sing');

export const cardOpenEdit = document.querySelector('.profile__add-button');

export const inputName = popupProfile.querySelector('.popup__input_type_name');
export const inputWork = popupProfile.querySelector('.popup__input_type_work');
export const inputTitle = popupCard.querySelector('.popup__input_type_title');
export const inputLink = popupCard.querySelector('.popup__input_type_link');

export const editName = document.querySelector('.profile__name');
export const editWork = document.querySelector('.profile__work');

export const cardBox = document.querySelector('.elements')
