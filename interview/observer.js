class Observer {
  _eventListeners = {}

  on(name, fn) {
    ;(this._eventListeners[name] || (this._eventListeners[name] = [])).push(fn)
  }

  once(name, fn) {
    let tempFunc = (...args) => {
      this.removeListener(name, fn)
      fn(...args)
    }

    tempFunc.fn = fn
    this.on(name, tempFunc)
  }

  removeListener(name, fn) {
    if (this._eventListeners[name] == void 0) {
      this._eventListeners[name] = this._eventListeners[name].filter(item => {
        return item != fn && item != fn.fn
      })
    }
  }

  removeAllListener(name) {
    if (name && this._eventListeners[name]) {
      delete this._eventListeners[name]
    }

    this._eventListeners = {}
  }

  emit(name, ...args) {
    if (this._eventListeners[name]) {
      this._eventListeners.forEach(item => {
        item.apply(this, args)
      })
    }
  }
}
