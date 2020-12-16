import {getRandomInteger} from "../utils/common.js";
import {DESCRIPTIONS, TYPE_POINTS, CITIES} from "../const.js";

const generateDescription = () => {

  const randomIndex = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const randomCount = getRandomInteger(1, 5);
  const rendomDescriptions = [];
  for (let i = 0; i < randomCount; i++) {
    rendomDescriptions.push(DESCRIPTIONS[randomIndex]);
  }
  return rendomDescriptions;
};

const generateTypePoint = () => {

  const randomIndex = getRandomInteger(0, TYPE_POINTS.length - 1);
  return TYPE_POINTS[randomIndex];
};

const generateCity = () => {

  const randomIndex = getRandomInteger(0, CITIES.length - 1);
  return CITIES[randomIndex];
};

const generateOffers = () => {
  return [
    {
      name: `Add luggage`,
      cash: 30,
      check: Boolean(getRandomInteger(0, 1))
    },
    {
      name: `Switch to comfort class`,
      cash: 100,
      check: Boolean(getRandomInteger(0, 1))
    },
    {
      name: `Add meal`,
      cash: 15,
      check: Boolean(getRandomInteger(0, 1))
    },
    {
      name: `Choose seats`,
      cash: 5,
      check: Boolean(getRandomInteger(0, 1))
    },
    {
      name: `Travel by train`,
      cash: 40,
      check: Boolean(getRandomInteger(0, 1))
    }
  ];

  // const randomIndex = getRandomInteger(0, offers.length - 1);
  // return offers[randomIndex];
};

const generatePhoto = () => {
  const randomCount = getRandomInteger(1, 5);
  const randomPhotos = [];
  for (let i = 0; i < randomCount; i++) {
    randomPhotos.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }
  return randomPhotos;
};

export const generatePoint = () => {
  return {
    typePoints: generateTypePoint(),
    city: generateCity(),
    offers: generateOffers(),
    description: generateDescription().join(``),
    photos: generatePhoto(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    price: getRandomInteger(100, 1000)
  };
};
// console.log(generatePoint().photos);
