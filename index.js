// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  let newArr = []
  newArr.push(arr[0])
  newArr.push(arr[1])
  return newArr
}

const returnLastTwoDrivers = (arr) => {
  let newArr = []
  newArr.push(arr[arr.length - 2], arr[arr.length - 1])
  return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
  return (fare) => {
    return num * fare
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrDrivers, func) {
  return (func === returnFirstTwoDrivers ? returnFirstTwoDrivers(arrDrivers) : returnLastTwoDrivers(arrDrivers))
}