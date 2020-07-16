describe('leet code', () => {
  test('1512', () => {
    const numIdenticalPairs = (nums: number[]) => {
      let result: number = 0

      nums.forEach((item, i) => {
        nums.slice(i + 1).forEach(itemChild => {
          if (itemChild == item) {
            result++
          }
        })
      })

      return result
    }

    expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4)
    expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6)
    expect(numIdenticalPairs([1, 2, 3])).toBe(0)
  })

  test('1431', () => {
    var kidsWithCandies = function (candies: number[], extraCandies: number) {
      let max = candies.reduce((result, item) => {
        if (result < item) {
          result = item
        }
        return result
      }, 0)

      return candies.map(item => {
        let result = false
        item + extraCandies >= max ? (result = true) : (result = false)

        return result
      })
    }

    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true,
      true,
      true,
      false,
      true,
    ])
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
      true,
      false,
      false,
      false,
      false,
    ])
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true])
  })

  test('1470', () => {
    var testFunc = function (nums: number[], n: number) {
      let xArray = nums.slice(0, n)
      let yArray = nums.slice(n)
      let resultArray = []

      for (let i = 0; i < n; i++) {
        resultArray.push(xArray[i])
        resultArray.push(yArray[i])
      }

      return resultArray
    }

    expect(testFunc([2, 5, 1, 3, 4, 7], 3)).toEqual([2, 3, 5, 4, 1, 7])
    expect(testFunc([1, 2, 3, 4, 4, 3, 2, 1], 4)).toEqual([
      1,
      4,
      2,
      3,
      3,
      2,
      4,
      1,
    ])
    expect(testFunc([1, 1, 2, 2], 2)).toEqual([1, 2, 1, 2])
  })

  test('1486', () => {
    var testFunc = function (n: number, start: number) {
      let array = []
      let result = 0

      for (let index = 0; index < n; index++) {
        array.push(start + index * 2)
      }
      return array.reduce((result, item) => {
        return item ^ result
      }, result)
    }

    expect(testFunc(5, 0)).toEqual(8)
    expect(testFunc(4, 3)).toEqual(8)
    expect(testFunc(1, 7)).toEqual(7)
    expect(testFunc(10, 5)).toEqual(2)
  })

  test('offer 58', () => {
    var testFunc = function (s: string, n: number) {
      let target = s.slice(0, n)
      let source = s.slice(n)

      return source + target
    }

    expect(testFunc('abcdefg', 2)).toEqual('cdefgab')
    expect(testFunc('lrloseumgh', 6)).toEqual('umghlrlose')
  })

  test('1299', () => {
    var testFunc = function (nums: number[]) {
      return nums.map((item, i) => {
        let tempArray = nums.slice(i + 1)

        if (tempArray.length == 0) {
          return -1
        } else {
          let max = tempArray.reduce((max, value) => {
            if (max < value) {
              max = value
            }
            return max
          }, 0)
          return max
        }
      })
    }

    expect(testFunc([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1])
  })

  test('665', () => {
    var testFunc = function (nums: number[]) {
      let firstArr = [...nums]
      let secondArr = [...nums]
      let firstResult = true
      let secondResult = true

      for (let index = 0; index < nums.length - 1; index++) {
        if (nums[index] > nums[index + 1]) {
          firstArr[index] = firstArr[index + 1]
          secondArr[index + 1] = secondArr[index]

          break
        }
      }
      console.log(firstArr, secondArr)

      for (let index = 0; index < nums.length - 1; index++) {
        if (firstArr[index] > firstArr[index + 1]) {
          firstResult = false
        }
        if (secondArr[index] > secondArr[index + 1]) {
          secondResult = false
        }
      }

      return firstResult || secondResult
    }

    expect(testFunc([4, 2, 3])).toEqual(true)
    expect(testFunc([2, 3, 3, 2, 4])).toEqual(true)
    expect(testFunc([4, 2, 1])).toEqual(false)
    expect(testFunc([3, 4, 2, 3])).toEqual(false)
    expect(testFunc([-1, 4, 2, 3])).toEqual(true)
    expect(testFunc([1, 2, 4, 1])).toEqual(true)
  })
})
