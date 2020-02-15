export type Pointer = LinkedListNode | null

export class LinkedListNode {

  value: any
  next: Pointer
  pre: Pointer

  constructor(value: any, next: Pointer = null, pre: Pointer = null) {
    this.value = value
    this.next = next
    this.pre = pre
  }
}

export const createNode = (value: any, next?: Pointer, pre?: Pointer) => new LinkedListNode(value, next, pre)