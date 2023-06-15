import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
	constructor(popupElement) {
		super(popupElement);
		this._form = this._popupElement.querySelector('.popup__inputs');
	}

	submitCallback(del) {
		this._handleSubmit = del;
	}

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._handleSubmit();
		});
	}
}
