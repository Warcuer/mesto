import { escapeKey} from '../utils/utils.js';

export default class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  open() {
    this._popupElement.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popupElement.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose(e) {
    if (e.keyCode === escapeKey) {
      this.close();
    };
  };

  _handleMouseClick() {
    this._popupElement.addEventListener('click', (e) => {
      if (e.currentTarget === e.target) {
        this.close(this._popupElement);
      }
    });
  };

  setEventListeners() {
    this._closeButton = this._popupElement.querySelector('.popup__close');
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
    this._handleMouseClick();
  };
};