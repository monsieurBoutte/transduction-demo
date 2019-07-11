// predicates
const isInBudget = budget => obj => obj.price <= budget;
const hasEnoughBedrooms = obj => obj.bedroomCount >= 3;
const hasEnoughBathrooms = obj => obj.bathroomCount >= 2;
const isNearMe = obj => obj.within50Miles;
const isBigEnough = obj => obj.squareFootage > 1500;

module.exports = {
  hasEnoughBathrooms,
  hasEnoughBedrooms,
  isBigEnough,
  isInBudget,
  isNearMe,
};
