const T = require('transducers-js');
// #region local imports
const { homes } = require('./mock/collection');
const { shoutAddress, arrayPush } = require('./util');

const {
  hasEnoughBathrooms,
  hasEnoughBedrooms,
  isBigEnough,
  isInBudget,
  isNearMe
} = require('./util/predicates');
// #endregion

const xForm = T.comp(
  T.filter(hasEnoughBathrooms),
  T.filter(hasEnoughBedrooms),
  T.filter(isBigEnough),
  T.filter(isInBudget(650000)),
  T.map(shoutAddress)
);

const otherTransduction = collection =>
  T.transduce(
    xForm,
    arrayPush,
    [],
    collection
  );

otherTransduction(homes);
