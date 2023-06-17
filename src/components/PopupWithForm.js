import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor( {popupElement, handleFormSubmit }) {
    super(popupElement);
    this._form = this._popupElement.querySelector('.popup__inputs');
    this._handleFormSubmit = handleFormSubmit;
    this._input = Array.from(this._popupElement.querySelectorAll('.popup__input'));
  };

  _getInputValues() {
    this._formValues = {};
    this._input.forEach((input) => {
      (this._formValues[input.name] = input.value)
    });
    return this._formValues;
  };

  setEventListeners() {
    this._form.addEventListener('submit', () => {
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  };

  close() {
    this._form.reset();
    super.close();
  };
};