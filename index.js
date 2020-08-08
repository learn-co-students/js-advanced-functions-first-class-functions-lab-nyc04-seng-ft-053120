// Code your solution in this file!
const returnFirstTwoDrivers = (driversArray) => {
    return driversArray.slice(0, 2);
};

const returnLastTwoDrivers = (driversArray) => {
    return driversArray.slice(driversArray.length-2, driversArray.length);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (integer) => {
    return (fare) => fare * integer
};

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
};

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
};

const selectDifferentDrivers = (driversArray, fn) => {
    return fn(driversArray)
};