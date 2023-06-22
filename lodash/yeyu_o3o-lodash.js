var yeyu_o3o = {

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
    // 遍历数组
    for (i = fromIndex; i < array.length; i++) {
      // 如果是函数
      if (typeof (predicate) == 'function') {
        if (predicate(array[i]) == true) {
          return i
        }
      }
      // 如果是对象
      if (typeof (predicate) == 'object') {
        // 如果是数组
        if (Array.isArray(predicate)) {
          if (predicate[0] in array[i] && predicate[1] == array[i][predicate[0]]) {
            return i
          }
        } else {
          // 如果是键值对
          let c = true
          for (let item in predicate) {
            if (array[i][item] !== predicate[item]) {
              c = false
            }
          }
          if (c) {
            return i
          }
        }
      }
      // 如果是字符串
      if (typeof (predicate) == 'string') {
        if (predicate in array[i] && array[i][predicate]) {
          return i
        }
      }
    }
    return -1
  },

  findLastIndex: function (array, predicate = identity, fromIndex = array.length - 1) {
    // 遍历数组
    for (i = fromIndex; i < array.length; i--) {
      // 如果是函数
      if (typeof (predicate) == 'function') {
        if (predicate(array[i]) == true) {
          return i
        }
      }
      // 如果是对象
      if (typeof (predicate) == 'object') {
        // 如果是数组
        if (Array.isArray(predicate)) {
          if (predicate[0] in array[i] && predicate[1] == array[i][predicate[0]]) {
            return i
          }
        } else {
          // 如果是键值对
          let c = true
          for (let item in predicate) {
            if (array[i][item] !== predicate[item]) {
              c = false
            }
          }
          if (c) {
            return i
          }
        }
      }
      // 如果是字符串
      if (typeof (predicate) == 'string') {
        if (predicate in array[i] && array[i][predicate]) {
          return i
        }
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
      let t = yeyu_o3o.flatten(array)
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
          let t = yeyu_o3o.flattenDepth(array[i], depth - 1)
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
  },

  toPairs: object => {
    var res = []
    for (let key in object) {
      var t = []
      t.push(key)
      t.push(object[key])
      res.push(t)
    }
    return res
  },

  head: array => array[0] ? array[0] : undefined,

  indexOf: (array, value, fromIndex = 0) => {
    if (fromIndex < 0) {
      fromIndex = fromIndex + array.length
    }
    for (let i = fromIndex; i < array.length; i++) {
      if (value == array[i]) {
        return i
      }
    }
    return -1
  },

  lastIndexOf: (array, value, fromIndex = array.length - 1) => {
    for (let i = fromIndex; i > 0; i--) {
      if (value == array[i]) {
        return i
      }
    }
    return -1
  },

  initial: array => array.slice(0, -1),

  join: (array, separator = ',') => {
    var res = ''
    for (let val of array) {
      res = res + val + separator
    }
    return res.slice(0, -1)
  },

  last: array => array[array.length - 1],

  pull: (array, ...values) => {
    for (let i = 0; i < array.length; i++) {
      for (let item of values) {
        if (array[i] == item) {
          array.splice(i, 1)
          // 这里要注意splice方法会改变原数组的下标
          i--
          break
        }
      }
    }
    return array
  },

  _swap: (array, i, j) => {
    let t = array[i]
    array[i] = array[j]
    array[j] = t
  },

  reverse: array => {
    for (let i = 0; i < array.length >> 1; i++) {
      yeyu_o3o._swap(array, i, array.length - 1 - i)
    }
    return array
  },

  every: (collection, predicate = yeyu_o3o.identity) => {
    predicate = yeyu_o3o.transformPredicate(predicate)
    for (var value of collection) {
      if (!predicate(value)) {
        return false
      }
    }
    return true
    // // 遍历集合
    // for (let i = 0; i < collection.length; i++) {
    //   // 如果是函数
    //   if (typeof (predicate) == 'function') {
    //     if (!predicate(collection[i])) {
    //       return false
    //     }
    //   }
    //   // 如果是对象
    //   if (typeof (predicate) == 'object') {
    //     // 如果是数组
    //     if (Array.isArray(predicate)) {
    //       if (!(predicate[0] in collection[i]) || !(predicate[1] == collection[i][predicate[0]])) {
    //         return false
    //       }
    //     }
    //     // 是对象
    //     for (var key in predicate) {
    //       // 如果key在集合里不存在
    //       if (!key in collection[i]) {
    //         return false
    //       } else {
    //         if (!(predicate[key] == collection[i][key])) {
    //           return false
    //         }
    //       }
    //     }
    //     for (var key in collection[i]) {
    //       // 如果key在集合里不存在
    //       if (!key in predicate) {
    //         return false
    //       } else {
    //         if (!(predicate[key] == collection[i][key])) {
    //           return false
    //         }
    //       }
    //     }
    //   }
    //   // 如果是字符串
    //   if (typeof (predicate) == 'string') {
    //     if (!(predicate in collection[i]) || !(collection[i][predicate])) {
    //       return false
    //     }
    //   }
    //   // 如果是布尔值
    //   if (typeof (predicate) == 'boolean') {
    //     if (!predicate[i]) {
    //       return false
    //     }
    //   }
    // }
    // return true
  },

  some: (collection, predicate = yeyu_o3o.identity) => {
    predicate = yeyu_o3o.transformPredicate(predicate)

    for (let val of collection) {
      if (predicate(val)) {
        return true
      }
    }

    return false
    // // 遍历集合
    // for (let i = 0; i < collection.length; i++) {
    //   // 如果是函数
    //   if (typeof (predicate) == 'function') {
    //     if (predicate(collection[i])) {
    //       return true
    //     }
    //   }
    //   // 如果是对象
    //   if (typeof (predicate) == 'object') {
    //     // 如果是数组
    //     if (Array.isArray(predicate)) {
    //       if (predicate[0] in collection[i] && predicate[1] == collection[i][predicate[0]]) {
    //         return true
    //       }
    //     }
    //     // 是对象,遍历对象
    //     for (var key in predicate) {
    //       // 如果key在集合里不存在
    //       if (key in collection[i] && collection[i][key]) {
    //         return true
    //       }
    //     }
    //     for (var key in collection[i]) {
    //       if (predicate[key] == collection[i][key]) {
    //         return true
    //       }
    //     }
    //   }
    // }
    // // 如果是字符串
    // if (typeof (predicate) == 'string') {
    //   if (predicate in collection[i] && collection[i][predicate]) {
    //     return true
    //   }
    // }
    // // 如果是布尔值
    // if (predicate == 'Boolean') {
    //   if (predicate[i]) {
    //     return true
    //   }
    // }
  },

  transformPredicate: (predicate) => {
    // 如果predicate是函数
    if (typeof (predicate) == 'function') {
      return predicate
    }
    // 如果predicate是数组
    if (Array.isArray(predicate)) {
      var key = predicate[0]
      var value = predicate[1]
      return obj => obj[key] == value
    }
    // 如果predicate是对象
    if (typeof (predicate) == 'object') {
      // 目标是返回一个函数
      return obj => {
        // 判断obj是否在predicate里面
        for (let key in obj) {
          var val1 = obj[key]
          var val2 = predicate[key]
          if (!(key in predicate)) {
            return false
          } else {
            if (!(val1 == val2)) {
              return false
            }
          }
        }
        // 判断predicate是否在obj里面
        for (let key in predicate) {
          var val1 = obj[key]
          var val2 = predicate[key]
          if (!(key in obj)) {
            return false
          } else {
            if (!(val1 == val2)) {
              return false
            }
          }
        }
        return true
      }
    }
    // 如果predicate是字符串
    if (typeof (predicate) == 'string') {
      return obj => obj[predicate]
    }
  },

  transformIteratee: iteratee => {
    // 返回值应为函数
    if (typeof (iteratee) == 'function') {
      return iteratee
    }
    if (typeof (iteratee) == 'object') {
      //深度对比
      return obj => {
        for (var key in value) {
          if (obj[key] !== value[key]) {
            return false;
          }
        }
        return true;
      }
    }
    if (typeof (iteratee) == 'string') {
      return obj => obj[iteratee]
    }
  },

  countBy: (collection, iteratee = identity) => {
    iteratee = yeyu_o3o.transformIteratee(iteratee)

    let res = {}
    for (let value of collection) {
      let key = iteratee(value)
      if (!(key in res)) {
        res[key] = 1
      } else {
        res[key]++
      }
    }
    return res
  },

  groupBy: (collection, iteratee = identity) => {
    iteratee = yeyu_o3o.transformIteratee(iteratee)

    let res = {}

    for (var i = 0; i < collection.length; i++) {
      let key = iteratee(collection[i])
      if (!(key in res)) {
        res[key] = []
        res[key].push(collection[i])
      } else {
        res[key].push(collection[i])
      }
    }

    return res
  },

  keyBy: (collection, iteratee = identity) => {
    iteratee = yeyu_o3o.transformIteratee(iteratee)

    let res = {}

    for (let value of collection) {
      let key = iteratee(value)
      res[key] = value
    }

    return res
  },

  forEach: (collection, iteratee = identity) => {
    iteratee = yeyu_o3o.transformIteratee(iteratee)

    for (let key in collection) {
      collection[key] = iteratee(collection[key])
    }
  },

  map: (collection, iteratee = identity) => {
    iteratee = yeyu_o3o.transformIteratee(iteratee)

    let arr = []
    for (let key in collection) {
      arr.push(iteratee(collection[key]))
    }
    return arr
  },

  filter: (collection, predicate = identity) => {
    // 给的predicate如果少于obj且满足obj就可以返回真，此处是不能使用这个函数的
    // predicate = yeyu_o3o.transformPredicate(predicate)

    var transformPredicate2 = predicate => {
      if (typeof (predicate) == 'function') {
        return predicate
      }
      // 如果predicate是数组
      if (Array.isArray(predicate)) {
        var key = predicate[0]
        var value = predicate[1]
        return obj => obj[key] == value
      }
      // 如果predicate是对象
      if (typeof (predicate) == 'object') {
        // 目标是返回一个函数
        return obj => {
          // 判断predicate是否在obj里面
          for (let key in predicate) {
            var val = predicate[key]
            if (!(key in obj)) {
              return false
            } else {
              if (val !== obj[key]) {
                return false
              }
            }
          }
          return true
        }
      }
      // 如果predicate是字符串
      if (typeof (predicate) == 'string') {
        return obj => obj[predicate]
      }
    }

    predicate = transformPredicate2(predicate)

    let res = []
    for (let key in collection) {
      if (predicate(collection[key]) === true) {
        res.push(collection[key])
      }
    }
    return res
  }

}

// http://10.3.3.3:33312/statics/lodash/
// https://www.lodashjs.com/

// 可以按以下顺序实现
// compact, chunk, fill, drop, findIndex, findLastIndex, flatten, flattenDeep, flattenDepth
// fromPairs, toPairs, head, indexOf, lastIndexOf, initial, join, last, pull, reverse, every, some
// countBy, groupBy, keyBy, forEach, map, filter, reduce, reduceRight, size, sortBy, sample,
//   isUndefined, isNull, isNil, max, min, maxBy, minBy, round, sumBy
// flagMap, flatMapDepth, get, has, mapKeys, mapValues
// range, stringifyJSON, concat, isEqual, repeat, padStart, padEnd, pad, keys, values, random,
//   round, ceil, floor, cloneDeep
// trim, trimStart, trimEnd, assign, merge,
