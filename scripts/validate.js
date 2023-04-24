function setIntputInvalid (form, input, errorMessage,{inputErrorClass, errorClass}) {
  const elementError = form.querySelector(`#error-${input.id}`);
  input.classList.add(inputErrorClass);
  elementError.textContent = errorMessage;
  elementError.classList.add(errorClass);
};

function setInputValid (form, input, {inputErrorClass, errorClass}){
  const elementError = form.querySelector(`#error-${input.id}`);
  input.classList.remove(inputErrorClass);
  elementError.classList.remove(errorClass);
  elementError.textContent = '';
};

function checkInputValidity (form, input, errorElement) {
  if (input.checkValidity()) {
    setInputValid(form, input, errorElement);
  } else {
    setIntputInvalid(form, input, input.validationMessage, errorElement);
    
  }
};

function setEventListeners (form, {inputSelector, submitButtonSelector, ...rest}) {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  const buttom = form.querySelector(submitButtonSelector);
  toggleButtonValidity(inputs, buttom, rest);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, rest);
      toggleButtonValidity(inputs, buttom, rest);
    });
  });
};

function enableValidation ({ formSelector, ...rest }) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    setEventListeners(form, rest);
  });
}

function hasInvalidInput (inputs) {
  return inputs.some((input) => {
    return !input.checkValidity();
  })
};

function toggleButtonValidity (inputs, buttom, {inactiveButtonClass}) {
  if (hasInvalidInput(inputs)) {
    buttom.classList.add(inactiveButtonClass);
    buttom.setAttribute("disabled", '');
  } else {
    buttom.classList.remove(inactiveButtonClass);
    buttom.removeAttribute("disabled", '');
  }
};

enableValidation({
  formSelector: '.popup__inputs',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
});