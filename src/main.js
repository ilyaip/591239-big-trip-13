import SiteInfoView from "./view/trip-info.js";
import SiteMenuView from "./view/menu.js";
import SiteFilterView from "./view/filters.js";
import {generatePoint} from "./mock/point.js";
import {render, RenderPosition} from "./utils/render.js";
import BoardPresentor from "./presenter/board.js";

const EVENT_COUNT = 10;
const points = new Array(EVENT_COUNT).fill().map(generatePoint);

const siteHeaderElement = document.querySelector(`.page-header`);
const siteInfoElement = siteHeaderElement.querySelector(`.trip-main`);

render(siteInfoElement, new SiteInfoView(), RenderPosition.AFTERBEGIN);

const siteTripControlsElement = siteHeaderElement.querySelector(`.trip-main__trip-controls`);
const siteMenuElement = siteTripControlsElement.querySelector(`h2`);

render(siteMenuElement, new SiteMenuView(), RenderPosition.AFTEREND);
render(siteTripControlsElement, new SiteFilterView(), RenderPosition.BEFOREEND);

const siteMainElement = document.querySelector(`main`);
const siteBoardElement = siteMainElement.querySelector(`.trip-events`);

const boardPresentor = new BoardPresentor(siteBoardElement);


boardPresentor.init(points);

