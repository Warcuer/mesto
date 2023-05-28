import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupImage = document.querySelector('.popup-image');
    this._popupSign = document.querySelector('.popup-case__sign');
  };

  open(data) {
    this._name = data.name;
    this._link = data.link;
    this._popupImage.src = this._link;
    this._popupSign.textContent = this._name;
    this._popupImage.alt = this._name;

    super.open();
  };
};