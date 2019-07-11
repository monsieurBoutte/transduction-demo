const R = require('ramda');
// #region local imports
const { homes } = require('./mock/collection');
const { shoutAddress } = require('./util');

const {
  hasEnoughBathrooms,
  hasEnoughBedrooms,
  isBigEnough,
  isInBudget,
  isNearMe,
} = require('./util/predicates');
// #endregion

const transform = R.compose(
  R.filter(hasEnoughBathrooms),
  R.filter(hasEnoughBedrooms),
  R.filter(isBigEnough),
  R.filter(isInBudget(650000)),
  R.map(shoutAddress)
);

// #region transform with tap
const transformWithTap = R.compose(
  R.filter(isInBudget(450000)),
  R.tap(x => console.log('AFTER BUDGET FILTER: \n', x)),
  R.filter(isNearMe),
  R.tap(x => console.log('AFTER NEARME FILTER: \n', x)),
  R.map(shoutAddress),
  R.tap(x => console.log('-------RESULT-------'))
);
// #endregion

const ramdaTransduction = collection =>
  R.transduce(
    transformWithTap,
    R.flip(R.append),
    [],
    collection
  );

console.log(ramdaTransduction(homes));

// #region early termination with Ramda
const isNotTicking = x => x !== 'ticking';

R.takeWhile(isNotTicking, [
  'package',
  'suitcase',
  'ticking',
  'secondPackage',
  'thirdPackage'
]);

R.takeWhile(x => x !== 't', 'Boutté');
// #endregion
