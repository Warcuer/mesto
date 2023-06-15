//СОЗДАНИЕ КАРТОЧКИ
export default class Card {
  constructor({ data, handleCardClick, handleDeleteClick, handleSetLike, handleDeleteLike }, templateSelector, userId) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleSetLike = handleSetLike;
    this._handleDeleteLike = handleDeleteLike;
    this._handleDeleteClick = handleDeleteClick;
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
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardDelete = this._element.querySelector('.element__basket');
    this._cardLike = this._element.querySelector('.element__like');
    this._likesCount = this._element.querySelector('.element__counting-like');
    this._likesCount.textContent = this._likes.length;

    if (this._ownerId !== this._userId) {
      this._cardDelete.remove();
    }

    this._checkLikedState();
    this._setEventListeners()

    return this._element;
  }

  _checkLikedState() {
    this._data.likes.forEach((like) => {
      if (like._id === this._userId) {
        this._cardLike.classList.add('element__like_active');
      }
    })
  }

  getId() {
    return this._cardId
  }

  _setEventListeners() {
    this._cardDelete.addEventListener('click', () => {
      this._handleDeleteClick()
    });

    this._cardImage.addEventListener('click', () =>
      this._handleCardClick(this._name, this._link)
    );

    this._cardLike.addEventListener('click', () => {
      if (this._cardLike.classList.contains('element__like_active')) {
        this._handleDeleteLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    });
  }
  handleDelete = () => {
    if (this._element) {
      this._element.remove();
      this._element = null;
    }
  }

  handleLike = (data) => {
    this._likes = data.like;
    this._likesCount.textContent = this._likes.length;
    this._cardLike.classList.toggle('element__like_active');
  }
}
