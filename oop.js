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
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }
}

class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }
  static plus(c) {
    return new Complex(this.real + c.real, this.imag + c.imag)
  }
  static minus(c) {
    return new Complex(this.real - c.real, this.imag - c.imag)
  }
  static mul(c) {
    var real = this.real * c.real - (this.imag * c.imag)
    var imag = this.real * c.imag + c.real * this.imag
    return new Complex(real, imag)
  }
  static div(c) {
    var real = (this.real * c.real + this.imag * c.imag) / (c.real * c.real + c.imag * c.imag)
    var imag = this.imag * c.real - this.real * c.imag / (c.real * c.real + c.imag * c.imag)
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
