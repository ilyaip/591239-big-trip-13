import SiteInfoView from "./view/trip-info.js";
import SiteMenuView from "./view/menu.js";
import SiteFilterView from "./view/filters.js";
import SiteSortView from "./view/sort.js";
import SiteEventListView from "./view/event-list.js";
// import SiteEventAddView from "./view/add.js";
import SiteEventEditView from "./view/edit.js";
import SiteEventView from "./view/event.js";
import {generatePoint} from "./mock/point.js";
import {render, RenderPosition} from "./utils.js";

const EVENT_COUNT = 20;

const points = new Array(EVENT_COUNT).fill().map(generatePoint);

const siteHeaderElement = document.querySelector(`.page-header`);
const siteInfoElement = siteHeaderElement.querySelector(`.trip-main`);

const renderPoint = (eventListElement, point) => {
  const eventComponent = new SiteEventView(point);
  const eventEditComponent = new SiteEventEditView(point);

  const replaceEventToEdit = () => {
    eventListElement.replaceChild(eventEditComponent.getElement(), eventComponent.getElement());
  };

  const replaceEditToEvent = () => {
    eventListElement.replaceChild(eventComponent.getElement(), eventEditComponent.getElement());
  };

  eventComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceEventToEdit();
  });

  eventEditComponent.getElement().querySelector(`form`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceEditToEvent();
  });

  eventEditComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceEditToEvent();
  });

  render(eventListElement, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

render(siteInfoElement, new SiteInfoView().getElement(), RenderPosition.AFTERBEGIN);

const siteTripControlsElement = siteHeaderElement.querySelector(`.trip-main__trip-controls`);
const siteMenuElement = siteTripControlsElement.querySelector(`h2`);

render(siteMenuElement, new SiteMenuView().getElement(), RenderPosition.AFTEREND);
render(siteTripControlsElement, new SiteFilterView().getElement(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`main`);
const siteSortElement = siteMainElement.querySelector(`.trip-events`);

const SiteEventList = new SiteEventListView();
render(siteSortElement, new SiteSortView().getElement(), RenderPosition.BEFOREEND);
render(siteSortElement, SiteEventList.getElement(), RenderPosition.BEFOREEND);
// render(SiteEventList.getElement(), new SiteEventAddView(points[0]).getElement(), RenderPosition.BEFOREEND);

// render(siteEventListElement, new SiteEventEditView(points[0]).getElement(), RenderPosition.BEFOREEND);


for (let i = 0; i < EVENT_COUNT; i++) {
  renderPoint(SiteEventList.getElement(), points[i]);
}


