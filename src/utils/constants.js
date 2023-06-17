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

export const profileAvatar = document.querySelector('.profile__avatar');

export const profileOpenEdit = document.querySelector('.profile__edit-buttom');

export const cardOpenEdit = document.querySelector('.profile__add-button');

export const inputName = popupProfile.querySelector('.popup__input_type_name');
export const inputWork = popupProfile.querySelector('.popup__input_type_work');

export const editName = document.querySelector('.profile__name');
export const editWork = document.querySelector('.profile__work');

export const popupConfirmClose = document.querySelector('.popup_confirm');
export const popupAvatar = document.querySelector('.popup_avatar');
export const openAvatar = document.querySelector('.profile__edit-avatar');