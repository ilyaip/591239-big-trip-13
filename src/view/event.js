import {getRandomInteger} from "../utils/common.js";
import AbstractView from "../view/abstract.js";

const createTripEventTemplate = ({typePoints, city, offers, isFavorite, price}) => {

  const isFavoriteIcon = isFavorite ? `event__favorite-btn--active` : ``;

  // const randomIndex = getRandomInteger(0, offers.length - 1);

  const selectedOffers = [];

  const getOffers = () => {
    for (let i = 0; i < getRandomInteger(0, 5); i++) {
      selectedOffers.push(`<li class="event__offer">
        <span class="event__offer-title">${offers[i].name}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offers[i].cash}</span>
      </li>`);
    }
    return selectedOffers.join(``);
  };

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">MAR 18</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${typePoints}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${typePoints} ${city}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T14:30">14:30</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T16:05">16:05</time>
        </p>
        <p class="event__duration">1H 35M</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${getOffers()}
      </ul>
      <button class="event__favorite-btn ${isFavoriteIcon}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class SiteEventView extends AbstractView {

  constructor(point) {
    super();
    this._point = point;
    this._clickHandler = this._clickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createTripEventTemplate(this._point);
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, this._clickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector(`.event__favorite-btn`).addEventListener(`click`, this._favoriteClickHandler);
  }
}
