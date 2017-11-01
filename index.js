// Double every item in an array
export const double = (arr) => {
  const arrayToReturn = []
  arr.forEach((item) => {
    arrayToReturn.push(item * 2)
  })
  return arrayToReturn;
}

// Censor any string that is 4 characters
export const censor = (arr) => {
  const arrayToReturn = []
  arr.forEach((item) => {
    if (item.length !== 4) {
      arrayToReturn.push(item)
    }
  })
  return arrayToReturn
}

// Return true if all numbers are 1000 or more
export const allBig = (arr) => {
  const bigThreshhold = 1000
  let allBig = true
  arr.forEach((item) => {
    if (item < bigThreshhold) {
      allBig = false
    }
  })
  return allBig
}

// Sum all the numbers in an array
export const sum = (arr) => {
  let total = 0
  arr.forEach((num) => {
    total += num
  })
  return total
}
