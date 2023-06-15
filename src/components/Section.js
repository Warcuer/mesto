export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._selector = document.querySelector(selector);
  };

  addItem(card) {
    this._selector.prepend(card);
  };

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  };
  
  newAddItem(card){
    this._selector.append(card);
  };
};
