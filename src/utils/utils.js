export function loading(popup, text) {
  const submitButton = popup.querySelector('.popup__save')
  submitButton.textContent = text;
}