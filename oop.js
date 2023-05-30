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
      this.vals[key] = val
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
