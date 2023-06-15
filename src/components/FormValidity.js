export default class FormValidity {
  constructor(validationConfig, form) {
    this.validationConfig = validationConfig;
    this._form = form;
    this._inputs = Array.from(this._form.querySelectorAll(this.validationConfig.inputSelector));
    this._button = this._form.querySelector(this.validationConfig.submitButtonSelector);
  }

  _setInputInvalid(input, errorMessage) {
    const elementError = this._form.querySelector(`#error-${input.id}`);
    input.classList.add(this.validationConfig.inputErrorClass);
    elementError.textContent = errorMessage;
    elementError.classList.add(this.validationConfig.errorClass);
  };

  _setInputValid(input) {
    const elementError = this._form.querySelector(`#error-${input.id}`);
    input.classList.remove(this.validationConfig.inputErrorClass);
    elementError.classList.remove(this.validationConfig.errorClass);
    elementError.textContent = '';
  };

  _checkInputValidity(input) {
    if (input.checkValidity()) {
      this._setInputValid(input);
    } else {
      this._setInputInvalid(input, input.validationMessage);
    }
  };

  _hasInvalidInput() {
    return this._inputs.some((input) => {
      return !input.checkValidity();
    })
  };

  _toggleButtonValidity() {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this.validationConfig.inactiveButtonClass);
      this._button.setAttribute("disabled", true);
    } else {
      this._button.classList.remove(this.validationConfig.inactiveButtonClass);
      this._button.removeAttribute("disabled");
    }
  };

  _setEventListeners() {
    this._toggleButtonValidity();

    this._form.addEventListener('reset', () => {
      setTimeout(() => {
        this._toggleButtonValidity();
      }, 0);
    });

    this._inputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonValidity();
      });
    });
  };

  disabledSubmitButton() {
    this._button.classList.add(this.validationConfig.inactiveButtonClass);
    this._button.setAttribute("disabled", true);
  }

  enableValidation() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    this._setEventListeners();
  };

  resValidity() {
    this._toggleButtonValidity();

    this._inputs.forEach((input) => {
      this._setInputInvalid(input)
    });
  };
};