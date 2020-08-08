const returnFirstTwoDrivers = drivers => {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = drivers => {
  const lastIndex = drivers.length - 1;
  return drivers.slice(lastIndex-1);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function fareMultipler(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverSelectFn) {
  return driverSelectFn(drivers);
}