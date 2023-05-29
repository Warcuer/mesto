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

// ОТКРЫТЬ POPUP
export const openPopup = (popup) => {
  popup.classList.add('popup_open');
};

// ЗАКРЫТЬ POPUP
export const closePopup = (popup) => {
  popup.classList.remove('popup_open');
};