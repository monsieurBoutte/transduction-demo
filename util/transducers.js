// transducers are a composition of higher order reducers

// filter transducer
function filterTransducer(predicate) {
  // nextReducer also written as step
  return nextReducer => (accumulator, currentValue) =>
    predicate(currentValue)
      ? nextReducer(accumulator, currentValue)
      : accumulator;
}

// mapping transducer
function mappingTransducer(fn) {
  return nextReducer => (accumulator, currentValue) =>
    nextReducer(accumulator, fn(currentValue));
}

module.exports = {
  mappingTransducer,
  filterTransducer
};
