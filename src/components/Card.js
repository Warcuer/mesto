import { openPopup } from "../utils/utils.js";
import { popupImage, imageCard, imageSign } from '../utils/constants.js'

//СОЗДАНИЕ КАРТОЧКИ
class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._popupImage = popupImage;
    this._imageCard = imageCard;
    this._imageSign = imageSign;
    this._handleCardClick = handleCardClick;
  }

  _addCardTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  addCard() {
    this._element = this._addCardTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    this._element.querySelector('.element__title').textContent = this._data.name;
    this._cardDelete = this._element.querySelector('.element__basket');
    this._cardLike = this._element.querySelector('.element__like');
    this._setEventListeners()
    return this._element;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', this._handleLike)
    this._cardDelete.addEventListener('click', this._handleDelete)
    this._cardImage.addEventListener('click', this._addOpenImage);
  }
  _handleLike = () => {
    this._cardLike.classList.toggle('element__like_active');
  }

  _handleDelete = () => {
    this._element.remove();
    this._element = null;
  }

  _addOpenImage = () => {
    openPopup(this._popupImage)
    this._imageCard.src = this._cardImage.src;
    this._imageCard.alt = this._cardImage.alt;
    this._imageSign.textContent = this._cardImage.alt;
  }
}

export default Card;
