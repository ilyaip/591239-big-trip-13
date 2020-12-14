import SiteInfoView from "./view/trip-info.js";
import SiteMenuView from "./view/menu.js";
import SiteFilterView from "./view/filters.js";
import SiteSortView from "./view/sort.js";
import SiteEventListView from "./view/event-list.js";
// import SiteEventAddView from "./view/add.js";
import SiteEventEditView from "./view/edit.js";
import SiteEventView from "./view/event.js";
import NoPointView from "./view/no-point.js";
import {generatePoint} from "./mock/point.js";
import {render, RenderPosition, replace} from "./utils/render.js";

const EVENT_COUNT = 10;
const ESC = `Esc`;
const ESCAPE = `Escape`;

const points = new Array(EVENT_COUNT).fill().map(generatePoint);

const siteHeaderElement = document.querySelector(`.page-header`);
const siteInfoElement = siteHeaderElement.querySelector(`.trip-main`);

const renderPoint = (eventListElement, point) => {
  const eventComponent = new SiteEventView(point);
  const eventEditComponent = new SiteEventEditView(point);

  const replaceEventToEdit = () => {
    replace(eventEditComponent, eventComponent);
  };

  const replaceEditToEvent = () => {
    replace(eventComponent, eventEditComponent);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === ESCAPE || evt.key === ESC) {
      evt.preventDefault();
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  eventComponent.setClickHandler(() => {
    replaceEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  eventEditComponent.setFormSubmitHandler(() => {
    replaceEditToEvent();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  eventEditComponent.setClickHandler(() => {
    replaceEditToEvent();
  });

  render(eventListElement, eventComponent, RenderPosition.BEFOREEND);
};

render(siteInfoElement, new SiteInfoView(), RenderPosition.AFTERBEGIN);

const siteTripControlsElement = siteHeaderElement.querySelector(`.trip-main__trip-controls`);
const siteMenuElement = siteTripControlsElement.querySelector(`h2`);

render(siteMenuElement, new SiteMenuView(), RenderPosition.AFTEREND);
render(siteTripControlsElement, new SiteFilterView(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`main`);
const siteBoardElement = siteMainElement.querySelector(`.trip-events`);

const renderBoard = (boardContainer, boardEvents) => {
  const SiteEventList = new SiteEventListView();

  render(boardContainer, SiteEventList, RenderPosition.BEFOREEND);

  points.forEach((boardEvent) => renderPoint(SiteEventList.getElement(), boardEvent));

  if (!boardEvents.length) {
    render(SiteEventList, new NoPointView(), RenderPosition.BEFOREEND);
  } else {
    render(SiteEventList, new SiteSortView(), RenderPosition.AFTERBEGIN);
  }


};

renderBoard(siteBoardElement, points);

// render(SiteEventList.getElement(), new SiteEventAddView(points[0]).getElement(), RenderPosition.BEFOREEND);

// render(siteEventListElement, new SiteEventEditView(points[0]).getElement(), RenderPosition.BEFOREEND);

