const yeyu_o3o = {

  compact: function (array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },

  chunk: function (array, size = 1) {
    let res = []
    for (let i = 0; i < array.length; i += size) {
      res.push(array.slice(i, i + size))
    }
    return res
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  drop: function (array, n = 1) {
    return array.slice(n)
  },

  identity: function (value) {
    return value
  },

  findIndex: function (array, predicate = identity, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (predicate(array[i])) {
        return i
      }
    }
    return -1
  },

  findLastIndex(array, predicate = identity, fromIndex = array.length - 1) {
    for (let i = fromIndex; i < array.length; i--) {
      if (this.predicate(array[i])) {
        return i
      }
    }
    return -1
  },

  flatten: function (array) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        res.push(...array[i])
      } else {
        res.push(array[i])
      }
    }
    return res
  },

  flattenDeep: function (array) {
    let res = []

    function fn(array) {
      let t = this.flatten(array)
      for (let i of t) {
        if (Array.isArray(i)) {
          fn(i)
        } else {
          res.push(i)
        }
      }
    }

    fn(array)
    return res
  },

  flattenDepth: function (array, depth = 1) {
    let res = []

    if (depth == 0) {
      return res
    }

    if (depth !== 0) {
      for (let i of array) {
        if (Array.isArray(array[i])) {
          let t = this.flattenDepth(array[i], depth - 1)
          res.push(...t)
        } else {
          res.push(i)
        }
      }
    }
    return res
  },

  fromPairs: function (pairs) {
    var res = {}
    for (let i = 0; i < pairs.length; i++) {
      res[pairs[i][0]] = pairs[i][1]
    }
    return res
  }
}

// http://10.3.3.3:33312/statics/lodash/
// https://www.lodashjs.com/
