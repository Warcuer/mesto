import { Popup } from './Popup.js';

export default class PopupWhithForm extends Popup {
  constructor({ popupSelector, handleSubmitFunc }) {
    super(popupSelector);
    this._handleSubmitFunc = handleSubmitFunc;
    this._popupCase = this._popup.querySelector('.popup-case');
    this._input = Array.from(this._popupCase.querySelectorAll('.popup__input'));
  };

  _getInputValues() {
    this._inputValue = {};

    this._input.forEach((input) => {
      this._inputValue[input.name] = input.value;
    });
    return this._inputValue
  };

  setEventListeners() {
    this._popupCase.addEventListener('submit', () => {
      this._inputValues = this._getInputValues();
      this._handleSubmitFunc(this._inputValue);
      this._close()
    });
    super.setEventListeners();
  };

  close() {
    super.close();
    this._popupCase.reset();
  };
};