// http://10.3.3.3:33312/statics/task/oop-test.html


class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(vector) {
    var x = this.x + vector.x
    var y = this.y + vector.y
    return new Vector(x, y)
  }
  minus(vector) {
    var x = this.x - vector.x
    var y = this.y - vector.y
    return new Vector(x, y)
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }
  plus(c) {
    return new Complex(this.real + c.real, this.imag + c.imag)
  }
  minus(c) {
    return new Complex(this.real - c.real, this.imag - c.imag)
  }
  mul(c) {
    var real = this.real * c.real - (this.imag * c.imag)
    var imag = this.real * c.imag + c.real * this.imag
    return new Complex(real, imag)
  }
  div(c) {
    var real = (this.real * c.real + this.imag * c.imag) / (c.real * c.real + c.imag * c.imag)
    var imag = (this.imag * c.real - this.real * c.imag) / (c.real * c.real + c.imag * c.imag)
    return new Complex(real, imag)
  }
}

class Stack {
  constructor() {
    this.head = null
    this.c = 0
  }
  push(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.c++
  }
  pop(val) {
    if (this.head == null) {
      return undefined
    }
    var val = this.head.val
    this.head = this.head.next
    this.c--
    return val
  }
  get size() {
    return this.c
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.c = 0
  }
  add(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.c++
  }
  pop() {
    if (this.head == null) {
      return
    }
    this.c--
    if (this.head == this.tail) {//只有一个节点时
      var res = this.head.val
      this.head = this.tail = null
      return res
    }
    //有多个节点时
    var res = this.head.val
    this.head = this.head.next
    return res
  }
  get size() {
    return this.c
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.c = 0
  }
  append(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.c++
  }
  prepend(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.c++
  }
  at(idx) {
    var p = this.head
    var count = 0
    while (count < idx) {
      p = p.next
      count++
    }
    return p.val
  }
  get size() {
    return this.c
  }
}

class MyMap {
  constructor() {
    this.keys = []
    this.vals = []
  }
  set(key, val) {
    var idx = this.keys.indexOf(key)
    if (idx < 0) {
      this.keys.push(key)
      this.vals.push(val)
    } else {
      this.vals[idx] = val
    }
    return this
  }
  get(key) {
    var idx = this.keys.indexOf(key)
    if (idx >= 0) {
      return this.vals[idx]
    }
  }
  has(key) {
    var x = this.keys.includes(key)
    if (x) {
      return true
    } else {
      return false
    }
  }
  delete(key) {
    var idx = this.keys.includes(key)
    if (idx >= 0) {
      this.keys.splice(idx, 1)
      this.vals.splice(idx, 1)
      return true
    }
    return false
  }
  get size() {
    return this.keys.length
  }
}

class MySet {
  constructor() {
    this.items = []
  }
  add(val) {
    if (!this.has(val)) {
      this.items.push(val)
    }
  }
  delete(val) {
    if (this.has(val)) {
      var idx = this.items.indexOf(val)
      this.items.splice(idx, 1)
    }
  }
  has(val) {
    return this.items.includes(val)
  }
  get size() {
    return this.items.length
  }
}


String.prototype.mymatch

String.prototype.mymatchAll

String.prototype.myreplace

String.prototype.myreplaceAll

String.prototype.mysearch = target => {
  if (typeof target == 'string') {
    return this.indexOf(target)
  } else {
    if (this.exec(str)) {
      return this.exec(str).index
    } else {
      return -1
    }
  }

}

RegExp.prototype.mytest = str => {
  if (this.exec(str)) {
    return true
  } else {
    return false
  }
}
// 利用RegExp.prototype.exec实现以上所有函数
// 调用方式跟自带的一样

// String.prototype.myreplaceAll = function (re, replacer) {
//   if (!re.global) {
//     throw new TypeError('xxx')
//   }
//   return this.myreplace(re, replacer)
// }

// String.prototype.mysplit = function (re) {
//   if (typeof re == 'string') {

//   } else {
//     var result = []
//     // re.global = true // 正则的标记都是不能改的,创建的时候确定
//     if (!re.global) {
//       re = new RegExp(re.source, 'g' + re.flags      )
//     }
//     re.lastIndex = 0
//     var match
//     var lastLastIndex = 0

//     while (match = re.exec(this)) {
//       result.push(this.slice(lastLastIndex, match.index))
//       result.push(...match.slice(1))
//       lastLastIndex = re.lastIndex
//     }
//     result.push(this.slice(lastLastIndex))
//     return result
//   }
// }


// String.prototype.myreplace = function (regexp, replacer) {
//   regexp.lastIndex = 0
//   var result = ''
//   var match
//   var lastLastIndex = 0
//   while (match = regexp.exec(this)) {
//     result += this.slice(lastLastIndex, match.index)
//     if (typeof replacer == 'function') {
//       result += replacer(...match, match.index, match.input)
//     } else {
//       // 先将replacer里的$i换成match[i],把$&换成match[0],然后再拼到结果上去
//       // foo$1_$2---   换成  `foo${match[1]}_${match[2]}---`
//       var replacement = replacer.myreplace(/\$([1-9\&])/g, (_, idx) => {
//         if (idx == '&') {
//           return match[0]
//         } else {
//           return match[idx]
//         }
//       })
//       result += replacement
//     }
//     lastLastIndex = regexp.lastIndex
//     if (!regexp.global) {
//       lastLastIndex = match.index + match[0].length
//       break
//     }
//   }
//   result += this.slice(lastLastIndex)
//   return result
// }

// String.prototype.mymatchAll = function (re) {
//   if (re instanceof RegExp) {
//     if (!re.global) {
//       throw new TypeError('String.prototype.matchAll called with a non-global RegExp argument')
//     }
//   }
//   if (typeof re == 'string') {
//     re = new RegExp(re, 'g')
//   }
//   re.lastIndex = 0
//   var result = []
//   var match
//   while (match = re.exec(this)) {
//     result.push(match)
//   }
//   return result
// }

// String.prototype.mymatch = function (re) {
//   if (re.global) { // re有g标记
//     re.lastIndex = 0 // 将其置0以保证匹配从头开始
//     var result = []
//     var match
//     while (match = re.exec(this)) {
//       result.push( match[0] )
//     }
//     return result
//   } else {
//     return re.exec(this)
//   }
// }

// /**
//  *
//  * @param target {string|RegExp}
//  * @returns {number}
//  */
// String.prototype.mysearch = function (target) {
//   if (typeof target == 'string') {
//     return this.indexOf(target)
//   } else {
//     // 如果target带有g标记且lastIndex属性不为0,会怎么样?
//     var match = target.exec(this)
//     if (match) {
//       return match.index
//     } else {
//       return -1
//     }
//   }
// }

// RegExp.prototype.mytest = function(str) {
//   if (this.exec(str)) {
//     return true
//   } else {
//     return false
//   }
// }
