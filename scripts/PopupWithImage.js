import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._cardImage = this._popup.querySelector('.popup-case__image');
    this._cardSign = this._popup.querySelector('.popup-case__sign')
  };

  open({ link, name }) {
    this._cardImage.src = link;
    this._cardImage.alt = name;
    this._cardSign.textContent = name;
    super.open();
  };
};