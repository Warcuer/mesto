export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
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
};
