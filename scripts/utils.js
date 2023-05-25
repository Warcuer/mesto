const cross = document.querySelectorAll('.popup__close');
export const escapeKey = 27;

// Условие для закрытия по "крестику"
export function closeCross() {
  cross.forEach(button => {
    const buttonPopup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(buttonPopup));
  });
};
closeCross();

// ЗАКРЫТИЕ ПО КНОПКЕ ESCAPE
export function handlEsc(evt) {
  if (evt.keyCode === escapeKey) {
    closePopup(document.querySelector('.popup_open'));
  };
};
// ЗАКРЫТИЕ ПО КЛИКУ НА ОВЕРЛЕЙ
export function handlMouseLeftClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
};

// // ОТКРЫТЬ POPUP
// export const openPopup = (popup) => {
//   popup.classList.add('popup_open');
//   document.addEventListener('keydown', handlEsc);
//   document.addEventListener('mousedown', handlMouseLeftClick)
// };

// // ЗАКРЫТЬ POPUP
// export const closePopup = (popup) => {
//   popup.classList.remove('popup_open');
//   document.removeEventListener('keydown', handlEsc);
//   document.removeEventListener('mousedown', handlMouseLeftClick)
// };