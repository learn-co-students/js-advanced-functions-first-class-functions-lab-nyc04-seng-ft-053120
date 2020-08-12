// returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
  }
  
  // returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
  
  const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  }
  
  // selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
  
  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];
  
  // createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
  
  const createFareMultiplier = int => fare => fare * int;
  
  // fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
  
  const fareDoubler = fare => createFareMultiplier(2)(fare);
  
  const fareTripler = fare => createFareMultiplier(3)(fare);
  
  const selectDifferentDrivers = (arrayOfDrivers, theReturnFunction) => {
    return theReturnFunction(arrayOfDrivers);
  }