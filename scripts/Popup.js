import {escapeKey} from './utils.js';
export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  };

  open() {
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('mousedown', handlMouseLeftClick);
  };

  close(){
  this._popup.classList.remove('popup_open');
  document.removeEventListener('keydown', this._handleEscClose);
  document.removeEventListener('mousedown', handlMouseLeftClick)
  };

  _handleEscClose (e) {
    if(e.keyCode === escapeKey){
      this._handleEscClose();
    };
  };

  setEventListeners () {
    this._popup.addEventListener('click', (e)=>{
      if(e.target.classList.contains('popup__close') || e.target.classList.contains('popup')){
        this.close()
      };
    });
  };
};