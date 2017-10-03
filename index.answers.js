export const double = (arr) => arr.map((num) => num * 2)
export const censor = (arr) => arr.filter((item) => item.length !== 4)
export const allBig = (arr) => arr.every((num) => num > 1000)
export const sum = (arr) => arr.reduce((sum, num) => sum + num, 0)
