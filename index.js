//#region imports
const { homes } = require('./mock/collection');
const { mappingTransducer, filterTransducer } = require('./util/transducers');
const { shoutAddress, calculateSum, arrayPush, compose } = require('./util');

const {
  hasEnoughBathrooms,
  hasEnoughBedrooms,
  isBigEnough,
  isInBudget,
  isNearMe
} = require('./util/predicates');

//#endregion

// map and filter chained transformation
const housesInBudget = collection =>
  collection
    .filter(isInBudget(650000))
    .filter(isBigEnough)
    .filter(hasEnoughBedrooms)
    .filter(hasEnoughBathrooms)
    .filter(isNearMe)
    .map(shoutAddress);

housesInBudget(homes);

// imperative for loop
const imperativeLoop = collection => {
  let results = [];

  for (let i = 0; i < collection.length; i++) {
    if (
      isInBudget(550000)(collection[i]) &&
      isBigEnough(collection[i]) &&
      hasEnoughBedrooms(collection[i]) &&
      hasEnoughBathrooms(collection[i]) &&
      isNearMe(collection[i])
    ) {
      results.push(shoutAddress(collection[i]));
    }
  }

  return results;
};

imperativeLoop(homes);
// finding the average house price

// method chaining w/ tail reduction
const sumOfHomes = homes
  .filter(isNearMe)
  .filter(hasEnoughBathrooms)
  .reduce(calculateSum, 0);

const averagePrice = (sumOfHomes / homes.length).toFixed(2);

const allInOneReducer = compose(
  filterTransducer(hasEnoughBathrooms),
  filterTransducer(hasEnoughBedrooms),
  filterTransducer(isBigEnough),
  filterTransducer(isInBudget(650000)),
  mappingTransducer(shoutAddress)
);

// transform also written / expressed as xForm
// a transducer needs a final reducer passed into it, in this case (arrayPush)
const xForm = allInOneReducer(arrayPush);

const filteredSearchTransduction = collection => collection.reduce(xForm, []);

filteredSearchTransduction(homes);
