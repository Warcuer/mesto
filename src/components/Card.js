//СОЗДАНИЕ КАРТОЧКИ
export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._name = data.name;
    this._link = data.link
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  };

  _addCardTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  };

  addCard() {
    this._element = this._addCardTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardDelete = this._element.querySelector('.element__basket');
    this._cardLike = this._element.querySelector('.element__like');
    this._setEventListeners()
    return this._element;
  };

  _setEventListeners() {
    this._cardLike.addEventListener('click', this._handleLike)
    this._cardDelete.addEventListener('click', this._handleDelete)
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  };
  _handleLike = () => {
    this._cardLike.classList.toggle('element__like_active');
  };

  _handleDelete = () => {
    this._element.remove();
    this._element = null;
  };
};
