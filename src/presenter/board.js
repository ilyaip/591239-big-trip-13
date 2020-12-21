import SiteEventListView from "../view/event-list.js";
import SiteSortView from "../view/sort.js";
import NoPointView from "../view/no-point.js";
import {updateItem} from "../utils/common.js";
import {render, RenderPosition} from "../utils/render.js";
import EventPresenter from "../presenter/event.js";

// const EVENT_COUNT = 10;

export default class BoardPresenter {
  constructor(boardContainer) {
    this._boardContainer = boardContainer;
    this._eventPresenter = {};

    this._eventListComponent = new SiteEventListView();
    this._noPointView = new NoPointView();
    this._sortComponent = new SiteSortView();

    this._handleEventChange = this._handleEventChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(boardEvents) {
    this._boardEvents = boardEvents.slice();

    render(this._boardContainer, this._eventListComponent, RenderPosition.BEFOREEND);

    this._renderBoard();
  }

  _handleModeChange() {
    Object
      .values(this._eventPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleEventChange(updatedEvent) {
    this._boardEvents = updateItem(this._boardEvents, updatedEvent);
    this._eventPresenter[updatedEvent.id].init(updatedEvent);
  }

  _renderSort() {
    render(this._eventListComponent, new SiteSortView(), RenderPosition.AFTERBEGIN);
  }

  _renderEvent(point) {
    const eventPresenter = new EventPresenter(this._eventListComponent, this._handleEventChange, this._handleModeChange);
    eventPresenter.init(point);
    this._eventPresenter[point.id] = eventPresenter;
  }

  _renderEvents(from, to) {
    this._boardEvents.slice(from, to).forEach((boardEvent) => this._renderEvent(boardEvent));
  }

  _renderNoEvents() {
    render(this._eventListComponent, new NoPointView(), RenderPosition.BEFOREEND);
  }

  _clearEventList() {
    Object
      .values(this._eventPresenter)
      .forEach((presenter) => presenter.destroy());
    this._eventPresenter = {};
  }

  _renderBoard() {
    if (!this._boardEvents.length) {
      this._renderNoEvents();
    } else {
      this._renderSort();
    }

    this._renderEvents();
  }
}
