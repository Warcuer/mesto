import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageCard = this._popupSelector.querySelector('.popup-case__image');
    this._imageSign = this._popupSelector.querySelector('.popup-case__sing');
  };

  open(data) {
    super.open();
    this._imageCard.src = data.link;
    this._imageSign.textContent = data.name;
  };
};