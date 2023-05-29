import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._imageCard = this._popupElement.querySelector('.popup-case__image');
    this._imageSign = this._popupElement.querySelector('.popup-case__sing');
  };

  open(data) {
    super.open();
    this._imageCard.src = data.link;
    this._imageSign.textContent = data.name;
    this._imageCard.alt = data.alt
  };
};