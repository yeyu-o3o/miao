class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(vector) {
    var x = this.x + vector.x
    var y = this.y + vector.y
    return new Vector
  }
  minus(vector) {
    var x = this.x - vector.x
    var y = this.y - vector.y
    return new Vector
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
  static plus(c1, c2) {
    return new Complex(c1.real + c2.real, c1.imag + c2.imag)
  }
  static minus(c1, c2) {
    return new Complex(c1.real - c2.real, c1.imag - c2.imag)
  }
  static mul(c1, c2) {
    var real = c1.real * c2.real - (c1.imag * c2.imag)
    var imag = c1.real * c2.imag + c2.real * c1.imag
    return new Complex(real, imag)
  }
  static div(c1, c2) {
    var real = (c1.real * c2.real + c1.imag * c2.imag) / (c2.real * c2.real + c2.imaginary * c2.imaginary)
    var imag = c2.real * c2.real + c2.imag * c2.imag / (c2.real * c2.real + c2.imaginary * c2.imaginary)
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
  size() {
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
  size() {
    return this.c
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.c = 0
  }
  append() {
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
  prepend() {
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
  size() {
    return this.c
  }
}

