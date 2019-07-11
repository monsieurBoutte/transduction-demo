// reduction -> a.k.a reducer -> a.k.a combinator
const calculateSum = (total, currentValue) => total + currentValue.price;

// array reducer
const arrayPush = (accumlator, currentValue) => {
  accumlator.push(currentValue);
  return accumlator;
};

// simple reducer example
const reducer = (accumlator, currentValue) => {
  // transformation or combination here
  accumlator.push(currentValue);
  // if (predicate(currentValue)) {
  //  accumlator.push(currentValue);
  // }
  return accumlator;
};
// collection.reduce(reducer, []);

const shoutAddress = obj => obj.address.toUpperCase();

// compose higher order functions from right to left.
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

module.exports = {
  shoutAddress,
  calculateSum,
  arrayPush,
  compose,
};
