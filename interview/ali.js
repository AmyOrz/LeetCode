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

// --------- 实现_.get 方法，获取如 a.b.c.d.e

function get(target, path, defaultValue = undefined) {
  if (target == void 0) return defaultValue

  let pathArray = path.replace(/\[(\w+)\]/g, '.$1').split('.')

  let result = target
  for (let o of pathArray) {
    result = result[o]
    if (result == void 0) {
      return defaultValue
    }
  }

  return result
}

// console.log(get({ a: null }, 'a.b.c', 3)) // output: 3
// console.log(get({ a: 2 }, 'a', 3)) // output: 2
// console.log(get({ a: { b: 1 } }, 'a.b', 3)) // output: 1
// console.log(get({ a: [{ b: [{ c: 1 }] }] }, 'a[0].b[0].c', 3)) // output: 1

// -----------------
function side(arr) {
  arr[0] = arr[2]
}
function a(a, b, c = 3) {
  c = 10
  side(arguments)
  return a + b + c
}
a(1, 1, 1) //12

// -----------------

var min = Math.min()
max = Math.max()
// console.log(min < max); //false

// -----------------
var a = 1
;(function a() {
  a = 2
  // console.log(a) //function a()
})()


// -----------------
var a = [0];
if (a) {
  console.log(a == true);
} else {
  console.log(a); //undefined
}