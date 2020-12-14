import AbstractView from "../view/abstract.js";

const createEventListTemplate = () => {
  return `<ul class="trip-events__list">
  </ul>`;
};

export default class SiteEventListView extends AbstractView {

  getTemplate() {
    return createEventListTemplate();
  }
}
