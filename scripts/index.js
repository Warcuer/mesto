const popupEdit = document.querySelector('.popup_type_edit-form')
const popupOpenForm = document.querySelector('.profile__edit-buttom')
const popupCloseForm = popupEdit.querySelector('.popup-form__close');


const submitInfo = popupEdit.querySelector('.popup-form__save');
const inputName = popupEdit.querySelector('.popup-form__name');
const inputWork = popupEdit.querySelector('.popup-form__work');
const popupForm = popupEdit.querySelector('.popup-form');


const editName = document.querySelector('.profile__name');
const editWork = document.querySelector('.profile__work');

// Условие для открытия popup
popupOpenForm.addEventListener('click', () => {
  popupEdit.classList.add('popup__open')
});

// Условие для закрытия popup
popupCloseForm.addEventListener('click', () => {
  popupEdit.classList.remove('popup__open');
});

// Условие для сохранения информации пользователя
popupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  editName.textContent = inputName.value;
  editWork.textContent = inputWork.value;

  popupEdit.classList.remove('popup__open');
});

