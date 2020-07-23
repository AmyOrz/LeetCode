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

      for (let i = 0; i < n; i++) {
        array.push(start + i * 2)
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

      for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
          firstArr[i] = firstArr[i + 1]
          secondArr[i + 1] = secondArr[i]

          break
        }
      }

      for (let i = 0; i < nums.length - 1; i++) {
        if (firstArr[i] > firstArr[i + 1]) {
          firstResult = false
        }
        if (secondArr[i] > secondArr[i + 1]) {
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

  test('523', () => {
    var testFunc = function (nums: number[], k: number) {
      let sumArray = [nums[0]]

      for (let i = 1; i < nums.length; i++) {
        sumArray[i] = sumArray[i - 1] + nums[i]
      }

      for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end < nums.length; end++) {
          let temp = sumArray[end] - sumArray[start] + nums[start]
          if (temp == k || (k != 0 && temp % k == 0)) {
            return true
          }
        }
      }

      return false
    }

    expect(testFunc([23, 2, 4, 6, 7], 6)).toEqual(true)
    expect(testFunc([23, 2, 6, 4, 7], 6)).toEqual(true)
    expect(testFunc([0, 0], 0)).toEqual(true)
  })

  test('859', () => {
    var testFunc = function (a: string, b: string): boolean {
      if (a.length != b.length) return false
      if (a == b && new Set(a).size < a.length) return true

      let result = []
      for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
          if (result.length > 2) return false

          result.push([a[i], b[i]])
        }
      }

      console.log(result)
      return (
        result.length == 2 && result[0].join('') == result[1].reverse().join('')
      )
    }

    expect(testFunc('ab', 'ba')).toEqual(true)
    expect(testFunc('aaaaaaabc', 'aaaaaaacb')).toEqual(true)
    expect(testFunc('ab', 'ab')).toEqual(false)
    expect(testFunc('aa', 'aa')).toEqual(true)
  })

  test('941', () => {
    var testFunc = function (nums: number[]) {
      if (nums.length < 3) return false
      let isIncrease = true
      for (let i = 1; i < nums.length - 1; i++) {
        if (isIncrease) {
          if (nums[i] < nums[i - 1] || nums[i] == nums[i + 1]) return false
          if (nums[i] >= nums[i + 1]) {
            isIncrease = false
          }
        } else {
          if (nums[i] < nums[i + 1] || nums[i] == nums[i + 1]) return false
        }
      }

      if (isIncrease) return false
      return true
    }

    expect(testFunc([3, 5, 5])).toEqual(false)
    expect(testFunc([3, 0, 5, 2, 1])).toEqual(false)
    expect(testFunc([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(false)
    expect(testFunc([14, 82, 89, 84, 79, 70, 70, 68, 3])).toEqual(false)
  })

  test('924', () => {
    var testFunc = function (nums: number[]) {
      let result = nums.reduce((result: number[], item: number, i: number) => {
        if (result.length == 0) {
          result.push(item)
        } else {
          result.push(result[i - 1] + item)
        }
        return result
      }, [])

      console.log(result)
      let max = result.length - 1
      for (let j = 0; j <= max; j++) {
        console.log(result[max], result[j])
        let target = j == 0 ? 0 : result[j - 1]
        if (result[max] - result[j] == target) {
          return j
        }
      }
      return -1
    }

    expect(testFunc([1, 7, 3, 6, 5, 6])).toEqual(3)
    expect(testFunc([-1, -1, -1, -1, -1, -1])).toEqual(-1)
    expect(testFunc([-1, -1, -1, 0, 1, 1])).toEqual(0)
    expect(testFunc([-1, -1, 0, 1, 0, -1])).toEqual(4)
    expect(testFunc([-1, -1, 0, 1, 1, 0])).toEqual(5)
  })

  test('643', () => {
    var testFunc = function (nums: number[], n: number) {}

    expect(testFunc([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75)
  })
})
