import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._imageCard = this._popupElement.querySelector('.popup-case__image');
    this._imageSign = this._popupElement.querySelector('.popup-case__sing');
  };

  open(name, link) {
    super.open();
    this._imageCard.src = link;
    this._imageSign.textContent = name;
    this._imageCard.alt = name;
  };
};