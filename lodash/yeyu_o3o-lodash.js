var yeyu_o3o = {

  compact: function (array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },

  chunk: function (array, [size = 1]) {
    var res = []
    for (var i = 0; i < array.length; i += size) {
      res.push(array.slice(i, i + size))
    }
    return res
  },

  fill: function (array, value, [start = 0], [end = array.length]) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  drop: function (array, [n = 1]) {
    return array.slice(0, n)
  }
}

// http://10.3.3.3:33312/statics/lodash/
// https://www.lodashjs.com/
