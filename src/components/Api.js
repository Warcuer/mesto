export default class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  };

  //ПРОВЕРКА НА ОШИБКИ
  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  };

  //ЗАПРОС ДАННЫХ С СЕРВЕРА
  getInitialsCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse)
  };

  getUserData() {
		return fetch(`${this._url}/users/me`, {
			headers: this._headers
		})
		.then(this._checkResponse)
	};

  setUserData(data) {
		console.log(data)
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.about
			})
		})
		.then(this._checkResponse)
	};

  setUserAvatar(data) {
		console.log(data)
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: data.avatar
			})
		})
		.then(this._checkResponse)
	};

  setLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		})
    .then(this._checkResponse)
	};

  //УДАЛИТЬ ЛАЙК
	deleteLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		})
    .then(this._checkResponse)
	};

  //ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ В СЕТКУ
  addNewCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link })
    })
    .then(this._checkResponse);
  };

  //УДАЛИТЬ КАРТОЧКУ
  handleDelete(cardId) {
		return fetch(`${this._url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
		.then(this._checkResponse);
	};
};