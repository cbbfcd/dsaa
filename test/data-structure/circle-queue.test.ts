import { CircleQueue } from '../../src';

const queue = new CircleQueue(5);

// ['a', 'b', 'c', 'd', 'e']
//   |         |  
//   head     tail

describe('CircleQueue Test', () => {

  it('#new CircleQueue with right length', () => {
    expect(queue.length).toBe(5);
  })

  it('#clear', () => {
    queue.enqueue('a');
    expect(queue.isEmpty).toBe(false);
    queue.clear();
    expect(queue.isEmpty).toBe(true);
  })

  it('#enqueue', () => {
    expect(queue.isEmpty).toBe(true);
    expect(queue.isFull).toBe(false);

    queue.enqueue('a');
    expect(queue.length).toBe(5);
    expect(queue.queue[0]).toBe('a');
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(false);

    queue.enqueue('b');
    expect(queue.length).toBe(5);
    expect(queue.queue[1]).toBe('b');
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(false);

    queue.enqueue('c');
    expect(queue.length).toBe(5);
    expect(queue.queue[2]).toBe('c');
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(false);

    queue.enqueue('d');
    expect(queue.length).toBe(5);
    expect(queue.queue[3]).toBe('d');
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(false);

    queue.enqueue('e');
    expect(queue.length).toBe(5);
    expect(queue.queue[4]).toBe('e');
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(true);

    const res6 = queue.enqueue('f');
    expect(queue.length).toBe(5);
    expect(res6).toBe(false);
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(true);
  })

  it('#dequeue', () => {
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(true);

    const ret01 = queue.dequeue();
    expect(queue.length).toBe(5);
    expect(ret01).toBe('a');
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(false);

    const ret02 = queue.dequeue();
    expect(queue.length).toBe(5);
    expect(ret02).toBe('b');
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(false);

    const ret03 = queue.dequeue();
    expect(queue.length).toBe(5);
    expect(ret03).toBe('c');
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(false);

    const ret04 = queue.dequeue();
    expect(queue.length).toBe(5);
    expect(ret04).toBe('d');
    expect(queue.isEmpty).toBe(false);
    expect(queue.isFull).toBe(false);

    const ret05 = queue.dequeue();
    expect(queue.length).toBe(5);
    expect(ret05).toBe('e');
    expect(queue.isEmpty).toBe(true);
    expect(queue.isFull).toBe(false);

    const ret06 = queue.dequeue();
    expect(queue.length).toBe(5);
    expect(ret06).toBe(null);
    expect(queue.isEmpty).toBe(true);
    expect(queue.isFull).toBe(false);
  })
})