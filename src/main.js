import {createTripInfoTemplate} from "./view/trip-info.js";
import {createTripMenuTemplate} from "./view/menu.js";
import {createTripFiltersTemplate} from "./view/filters.js";
import {createTripSortTemplate} from "./view/sort.js";
import {createTripContentTemplate} from "./view/content.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(".page-header");
const siteInfoElement = siteHeaderElement.querySelector(".trip-main");

render(siteInfoElement, createTripInfoTemplate(), "afterbegin");

const siteTripControlsElement = siteHeaderElement.querySelector(".trip-main__trip-controls");
const siteMenuElement = siteTripControlsElement.querySelector("h2");

render(siteMenuElement, createTripMenuTemplate(), "afterend");
render(siteTripControlsElement, createTripFiltersTemplate(), "beforeend");

const siteMainElement = document.querySelector("main");
const siteSortElement = siteMainElement.querySelector(".trip-events");

render(siteSortElement, createTripSortTemplate(), "beforeend");
render(siteSortElement, createTripContentTemplate(), "beforeend");
