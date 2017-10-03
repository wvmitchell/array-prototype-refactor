export const double = (arr) => {
  const arrayToReturn = []
  arr.forEach((item) => {
    arrayToReturn.push(item * 2)
  })
  return arrayToReturn;
}

export const censor = (arr) => {
  const arrayToReturn = []
  arr.forEach((item) => {
    if (item.length !== 4) {
      arrayToReturn.push(item)
    }
  })
  return arrayToReturn
}

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

export const sum = (arr) => {
  let total = 0
  arr.forEach((num) => {
    total += num
  })
  return total
}
