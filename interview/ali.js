// ---------- 实现find函数
let find = function (data) {
  this.data = data

  this.where = function (regObj) {
    this.data = data.filter(item => {
      let result = true

      for (let o in regObj) {
        if (regObj[o].test(item[o]) == false) {
          result = false
        }
      }
      return result
    })
    return this
  }
  this.orderBy = function (target, order) {
    this.data = this.data.sort((a, b) => {
      return order == 'desc' ? b[target] - a[target] : a[target] - b[target]
    })
    return this.data
  }

  return this
}

let data = [
  { userId: 1, title: 'yh3' },
  { userId: 2, title: 'yh2m' },
  { userId: 3, title: 'yh1' },
  { userId: 4, title: 'yh4' },
  { userId: '1a', title: 'yh5' },
]

// console.log(
//   find(data)
//     .where({
//       title: /\d$/,
//       userId: /^\d+$/,
//     })
//     .orderBy('userId', 'asc')
// )

// --------- 实现curry函数

let curry = (fn, ...args) => {
  if (args.length >= fn.length) {
    return fn(...args)
  }

  return (...newArgs) => {
    return curry(fn, ...args, ...newArgs)
  }
}

let add = (a, b, c, d) => {
  return a + b + c + d
}

let sum = curry(add)

// console.log('fck:', sum(1, 2, 3, 4))
// console.log(sum(1)(2, 3, 4))
// console.log(sum(1, 2)(3, 4))
// console.log(sum(1, 2, 3)(4))


// ---------