import {createElement} from "../utils.js";

const createEventListTemplate = () => {
  return `<ul class="trip-events__list">
  </ul>`;
};

export default class SiteEventListView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createEventListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
