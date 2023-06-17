const cross = document.querySelectorAll('.popup__close');

export function loading(popup, text) {
  const submitButton = popup.querySelector('.popup__save')
  submitButton.textContent = text;
}

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