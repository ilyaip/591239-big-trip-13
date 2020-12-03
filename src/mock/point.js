const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateDescription = () => {
  const descriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
    `Cras aliquet varius magna, non porta ligula feugiat eget. `, `Fusce tristique felis at fermentum pharetra. `,
    `Aliquam id orci ut lectus varius viverra. `, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. `,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. `, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. `,
    `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. `, `Nunc fermentum tortor ac porta dapibus. `,
    `In rutrum ac purus sit amet tempus. `];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);
  const randomCount = getRandomInteger(1, 5);
  const rendomDescriptions = [];
  for (let i = 0; i < randomCount; i++) {
    rendomDescriptions.push(descriptions[randomIndex]);
  }
  return rendomDescriptions;
};

const generateTypePoint = () => {
  const typePoints = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];

  const randomIndex = getRandomInteger(0, typePoints.length - 1);
  return typePoints[randomIndex];
};

const generateCity = () => {
  const cities = [`Amsterdam`, `Moscow`, `Singapore`, `Budapest`, `Rome`, `Paris`, `Omsk`];

  const randomIndex = getRandomInteger(0, cities.length - 1);
  return cities[randomIndex];
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
