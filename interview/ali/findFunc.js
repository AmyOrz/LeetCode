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

console.log(
  find(data)
    .where({
      title: /\d$/,
      userId: /^\d+$/,
    })
    .orderBy('userId', 'asc')
)
