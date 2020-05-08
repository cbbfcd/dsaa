export class CircleQueue {

  private len: number;
  private count: number;
  queue: any;

  private head: number;
  private tail: number;

  constructor(length: number = 20, defaultValue: any = null) {
    this.len = length;
    this.count = 0;
    this.queue = Array.from({ length }, () => defaultValue);

    this.head = 0;
    this.tail = 0;
  }

  get length() {
    return this.len;
  }

  get isEmpty() {
    return this.count === 0;
  }

  get isFull() {
    return this.count === this.len;
  }

  enqueue(data: any) {
    if (this.isFull) return false;
    this.queue[this.tail] = data;
    this.tail = (this.tail + 1) % this.len;
    this.count++;
    return true;
  }

  dequeue() {
    if (this.isEmpty) return null;
    const ret = this.queue[this.head];
    this.head = (this.head + 1) % this.len;    
    this.count--;
    return ret;
  }

  clear() {
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }
}