const popupEdit = document.querySelector('.popup');
const popupForm = popupEdit.querySelector('.popup-form');

const open = document.querySelector('.profile__edit-buttom');
const close = popupEdit.querySelector('.popup-form__close');
const save = popupEdit.querySelector('.popup-form__save');

const inputName = popupEdit.querySelector('.popup-form_name');
const inputWork = popupEdit.querySelector('.popup-form_work');

const editName = document.querySelector('.profile__name');
const editWork = document.querySelector('.profile__work');



function popupOpenForm() {
  popupEdit.classList.add('popup_open');
};

function popupCloseForm() {
  popupEdit.classList.remove('popup_open');
};

function saveInfo(event) {
  event.preventDefault();
  editName.textContent = inputName.value;
  editWork.textContent = inputWork.value;
  popupCloseForm();
}


// Условие для открытия popup
open.addEventListener('click', popupOpenForm);

// Условие для закрытия popup
close.addEventListener('click', popupCloseForm);

// Условие для сохранения информации пользователя
popupForm.addEventListener('submit', saveInfo);

