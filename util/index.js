// reduction -> a.k.a reducer -> a.k.a combinator
const calculateSum = (total, currentValue) => total + currentValue.price;

// array reducer
const arrayPush = (accumulator, currentValue) => {
  accumulator.push(currentValue);
  return accumulator;
};

// simple reducer example
const reducer = (accumulator, currentValue) => {
  accumulator.push(currentValue);
  // if (predicate(currentValue)) {
  //  accumulator.push(currentValue);
  // }
  return accumulator;
};
collection.reduce(reducer, []);

const shoutAddress = obj => obj.address.toUpperCase();

// compose higher order functions from right to left.
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

module.exports = {
  shoutAddress,
  calculateSum,
  arrayPush,
  compose
};
