// transducers are a composition of higher order reducers

// filter transducer
function filterTransducer(predicate) {
  // nextReducer also written as step
  return nextReducer =>
    (accumlator, currentValue) =>
      predicate(currentValue) ? nextReducer(accumlator, currentValue) : accumlator;
};

// mapping transducer
function mappingTransducer(fn) {
  return nextReducer => (accumlator, currentValue) =>
    nextReducer(accumlator, fn(currentValue));
};

module.exports = {
  mappingTransducer,
  filterTransducer
};
