import * as my from './index'

describe('the forEach madness', () => {
  it('doubles the items in the array', () => {
    const nums = [1,2,3,4,5]
    expect(my.double(nums)).toEqual([2,4,6,8,10])
  })

  it('removes 4 letter words', () => {
    const words = ['dog', 'cat', 'mouse', 'hare', 'bear', 'finch']
    const censored = ['dog', 'cat', 'mouse', 'finch']
    expect(my.censor(words)).toEqual(censored)
  })

  it('knows if all the items are big', () => {
    const nums = [23432443, 34223422, 343, 2342, 289983]
    expect(my.allBig(nums)).toBe(false)
  })

  it('can sum all of the numbers', () => {
    const nums = [1,2,3,4,5]
    expect(my.sum(nums)).toEqual(15)
  })
})
