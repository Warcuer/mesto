import {escapeKey,handlMouseLeftClick} from '../utils/utils.js';

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  open() {
    this._popupSelector.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
    document.removeEventListener('mousedown', handlMouseLeftClick);
  };

  close() {
    this._popupSelector.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('mousedown', handlMouseLeftClick);
  };

  _handleEscClose(evt) {
    evt.preventDefault();
    if (evt.keyCode === escapeKey) {
      this.close();
    };
  };

  setEventListeners() {
    this._closeButton = this._popupSelector.querySelector('.popup__close');
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
    this._popupSelector.addEventListener('click', (e) => {
      if (e.currentTarget === evt.target) {
        this.close(this._popupElement);
      }
    });
  };
};