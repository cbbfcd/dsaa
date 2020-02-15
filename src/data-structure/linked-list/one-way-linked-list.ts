import { Pointer, createNode, LinkedListNode } from './linked-list-node'

interface Comparator {
  (a: any, b: any): boolean
}

interface FindCallback {
  (c: LinkedListNode, i: number, t: OneWayLinkedList): boolean
}

const defaultCpr = (a: any, b: any) => a === b

export class OneWayLinkedList {

  head: Pointer
  tail: Pointer
  size: number
  comparator?: Comparator

  constructor(comparator: Comparator = defaultCpr) {
    this.head = null
    this.tail = null
    this.comparator = comparator
    this.size = 0
  }

  get length() {
    return this.size
  }

  toString(cb?: Function) {
    return (cb ? this.toArray().map(v => cb(v)) : this.toArray()).toString()
  }

  toArray() {
    const arr: LinkedListNode[] = []
    let curr = this.head
    
    while(curr) {
      arr.push(curr.value)
      curr = curr.next
    }

    return arr
  }

  fromArray(arr: any[]) {
    arr.forEach(v => this.push(v))

    return this
  }

  push(v: any) {
    const newNode = createNode(v)

    if (!this.head) {
      this.head = this.tail = newNode
      this.size++

      return this
    }

    this.tail!.next = newNode
    this.tail = newNode
    this.size++

    return this
  }

  unshift(v: any) {
    const newNode = createNode(v)
    newNode.next = this.head

    if (!this.head)
      this.tail = newNode

    this.head = newNode
    this.size++

    return this
  }

  insert(v: any, i: number = Infinity) {
    const size = this.size
    i < 0 && (i += size)

    if (i === undefined || i >= size)
      return this.push(v)

    if (i <= 0)
      return this.unshift(v)

    const prev = this.find((_, inx) => inx + 1 === i)

    const newNode = createNode(v, prev!.next)
    prev!.next = newNode
    this.size++
  
    return this
  }

  find(cb: FindCallback) {
    let idx = -1
    let curr = this.head

    while(curr) {
      if (cb(curr, ++idx, this))
        return curr

      curr = curr.next
    }

    return null
  }

  pop() {
    if (!this.tail) return null
    const tail = this.tail

    if (this.head === this.tail) {
      this.head = this.tail = null
      this.size--

      return tail
    }

    let curr: Pointer = this.head
    while(curr?.next) {
      if (!curr.next.next) curr.next = null
      else curr = curr.next
    }

    this.tail = curr
    this.size--

    return tail
  }

  shift() {
    if (!this.head) return null

    const del = this.head

    if (this.head.next) {
      this.head = this.head.next
    }
    else {
      this.head = this.tail = null
    }

    this.size--

    return del
  }

  slice(begin?: number, end?: number) {
    return new OneWayLinkedList().fromArray(this.toArray().slice(begin, end))
  }

  contains(v: any) {
    return !!this.find(node => node.value === v)
  }

  remove(cb?: FindCallback) {
    let curr = this.head
    let prev = null
    let idx = -1
    while(curr) {
      if (cb && cb(curr, ++idx, this)) {
        if (!prev) return this.shift()
        if (!curr.next) this.tail = prev
        prev.next = curr.next
        this.size--

        return curr
      }
      prev = curr
      curr = curr.next
    }

    return null
  }

  delete(v: any) {
    return this.remove(node => node.value === v)
  }

  delByIndex(inx: number = Infinity) {
    const size = this.size
    inx < 0 && (inx += size)

    if (inx >= size - 1) return this.pop()
    if (inx <= 0) return this.shift()

    const prev = this.find((_, i) => i + 1 === inx)
    const curr = prev!.next

    prev!.next = curr!.next
    this.size--

    return curr
  }

  clear() {
    this.head = this.tail = null
    this.size = 0

    return this
  }

  reverse() {
    let curr = this.head
    let next = null
    let prev = null

    while(curr) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }

    this.tail = this.head
    this.head = prev

    return this
  }

  *[Symbol.iterator]() {
    for (let node = this.head, index = 0; node; index++, node = node.next)
      yield {node, index}
  }
}