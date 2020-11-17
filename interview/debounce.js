//防抖， rxjs 中debounce概念，触发多次函数，但是只在规定时间内没有触发后才执行此函数
let debounce = (fn, waitTime) => {
  let timeOutFunc = null

  return (...args) => {
    clearTimeout(timeOutFunc)

    timeOutFunc = setTimeout(() => {
      fn.apply(this, args)
    }, waitTime)
  }
}

// 节流，规定时间内只触发一次该函数，如果时间内触发多次，只执行一次函数
let throttle = (fn, waitTime) => {
  let timeOutFunc = null

  return (...args) => {
    if (timeOutFunc == void 0) {
      timeOutFunc = setTimeout(() => {
        timeOutFunc = null

        fn.apply(this, args)
      }, waitTime)
    }
  }
}
