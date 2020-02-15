import { OneWayLinkedList, createNode } from '../../src'

describe('Linked List Node Tool Test', () => {

  describe('#createNode', () => {
    it('should create node', () => {
      const nodea = createNode('a')
      const nodep = createNode('p')
      const nodeb = createNode('b', nodea, nodep)

      expect(nodea.value).toBe('a')
      expect(nodeb.value).toBe('b')
      expect(nodeb.next!.value).toBe('a')
      expect(nodeb.pre!.value).toBe('p')
    })
  })
})

describe('One Way Linked-List Test', () => {
  let ll: OneWayLinkedList

  beforeEach(() => {
    ll = new OneWayLinkedList()
  })

  describe('#toArray, #fromArray', () => {
    const arr = ['a', 'b', 'c']

    it('should transfrom to a linked list with length 3', () => {
      ll.fromArray(arr)

      expect(ll.head!.value).toBe('a')
      expect(ll.head!.next!.value).toBe('b')
      expect(ll.head!.next!.next!.value).toBe('c')
      expect(ll.tail!.value).toBe('c')
      expect(ll.length).toBe(3)
    })

    it('should convert linked list to an array', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      const arr = ll.toArray()
      expect(Object.prototype.toString.call(arr)).toBe('[object Array]')
      expect(arr.length).toBe(3)
      expect(arr[0]).toBe('a')
      expect(arr[1]).toBe('b')
      expect(arr[2]).toBe('c')
    })
  })

  describe('#toString', () => {
    it('should toString exactly', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      expect(ll.toString()).toBe('a,b,c')
    })

    it('should toString exactly via custom function', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      expect(ll.toString((i: string) => `1${i}`)).toBe('1a,1b,1c')
    })
  })

  describe('#push', () => {

    it('should add element to end/tail of the list', () => {
      ll.push('a')

      expect(ll.head!.value).toBe('a')
      expect(ll.tail!.value).toBe('a')
    })

    it('length should be 1', () => {
      ll.push('a')

      expect(ll.length).toBe(1)
    })

    it('should linked value', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      expect(ll.head!.value).toBe('a')
      expect(ll.head!.next!.value).toBe('b')
      expect(ll.head!.next!.next!.value).toBe('c')
      expect(ll.tail!.value).toBe('c')
    })
  })

  describe('#unshift', () => {
    it('should add element to end/tail of the list', () => {
      ll.unshift('a')

      expect(ll.head!.value).toBe('a')
      expect(ll.tail!.value).toBe('a')
    })

    it('length should be 1', () => {
      ll.unshift('a')

      expect(ll.length).toBe(1)
    })

    it('should linked value', () => {
      ll.unshift('a')
      ll.unshift('b')
      ll.unshift('c')

      expect(ll.head!.value).toBe('c')
      expect(ll.head!.next!.value).toBe('b')
      expect(ll.head!.next!.next!.value).toBe('a')
      expect(ll.tail!.value).toBe('a')
    })
  })

  describe('#insert', () => {
    it('should add element to end/tail of the list', () => {
      ll.insert('a')

      expect(ll.head!.value).toBe('a')
      expect(ll.tail!.value).toBe('a')
    })

    it('length should be 1', () => {
      ll.insert('a')

      expect(ll.length).toBe(1)
    })

    it('should insert correctly via a positive postion index number = 0', () => {
      ll.insert('a')
      ll.insert('b')
      ll.insert('c', 0)

      expect(ll.head!.value).toBe('c')
      expect(ll.head!.next!.value).toBe('a')
      expect(ll.head!.next!.next!.value).toBe('b')
      expect(ll.tail!.value).toBe('b')
    })

    it('should insert correctly via a positive postion index number', () => {
      ll.insert('a')
      ll.insert('b')
      ll.insert('c', 1)
      ll.insert('d', 1000)

      expect(ll.head!.value).toBe('a')
      expect(ll.head!.next!.value).toBe('c')
      expect(ll.head!.next!.next!.value).toBe('b')
      expect(ll.head!.next!.next!.next!.value).toBe('d')
      expect(ll.tail!.value).toBe('d')
    })

    it('should insert correctly via a negative postion index number', () => {
      ll.insert('a')
      ll.insert('b')
      ll.insert('c')
      ll.insert('d', -1)
      ll.insert('e', -100)

      expect(ll.head!.value).toBe('e')
      expect(ll.head!.next!.value).toBe('a')
      expect(ll.head!.next!.next!.value).toBe('b')
      expect(ll.head!.next!.next!.next!.value).toBe('d')
      expect(ll.head!.next!.next!.next!.next!.value).toBe('c')
      expect(ll.tail!.value).toBe('c')
    })
  })

  describe('#find', () => {
    it('should find somthing or null', () => {
      ll.push('a')
      ll.push('b')

      const resForNull = ll.find(n => n.value == 'c')
      const resForA = ll.find(n => n.value === 'a')

      expect(resForA!.value).toBe('a')
      expect(resForNull).toBe(null)
    })
  })

  describe('#pop', () => {

    it('pop when linked list is empty', () => {
      expect(ll.pop()).toBe(null)
    })

    it('pop when linked list only one node', () => {
      ll.push('a')
      const pop = ll.pop()

      expect(pop!.value).toBe('a')
      expect(ll.length).toBe(0)
    })

    it('pop the last node', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      const pop = ll.pop()

      expect(pop!.value).toBe('c')
      expect(ll.length).toBe(2)
      expect(ll.tail!.value).toBe('b')
    })

    it('pop pop pop', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      const pop1 = ll.pop()
      const pop2 = ll.pop()
      const pop3 = ll.pop()

      expect(pop1!.value).toBe('c')
      expect(pop2!.value).toBe('b')
      expect(pop3!.value).toBe('a')
      expect(ll.length).toBe(0)
      expect(ll.head).toBe(null)
    })
  })

  describe('#shift', () => {

    it('shift when linked list is empty', () => {
      expect(ll.shift()).toBe(null)
    })

    it('shift when linked list only one node', () => {
      ll.push('a')
      const shift = ll.shift()

      expect(shift!.value).toBe('a')
      expect(ll.length).toBe(0)
    })

    it('shift the last node', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      const shift = ll.shift()

      expect(shift!.value).toBe('a')
      expect(ll.length).toBe(2)
      expect(ll.head!.value).toBe('b')
    })

    it('shift shift shift', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      const shift1 = ll.shift()
      const shift2 = ll.shift()
      const shift3 = ll.shift()

      expect(shift1!.value).toBe('a')
      expect(shift2!.value).toBe('b')
      expect(shift3!.value).toBe('c')
      expect(ll.length).toBe(0)
      expect(ll.head).toBe(null)
    })
  })

  describe('#contains', () => {
    it('should return true', () => {
      ll.push('a')
      ll.push('b')

      expect(ll.contains('a')).toBe(true)
      expect(ll.contains('b')).toBe(true)
    })

    it('should return false', () => {
      ll.push('a')
      ll.push('b')

      expect(ll.contains('c')).toBe(false)
    })
  })

  describe('#delete', () => {
    it('delete nothin when the linked list is empty', () => {
      expect(ll.delete('a')).toBe(null)
    })

    it('delete the first node', () => {
      ll.push('a')
      ll.push('b')
      const del = ll.delete('a')

      expect(del!.value).toBe('a')
      expect(ll.length).toBe(1)
      expect(ll.head!.value).toBe('b')
    })

    it('delete the last node', () => {
      ll.push('a')
      ll.push('b')
      const del = ll.delete('b')

      expect(del!.value).toBe('b')
      expect(ll.length).toBe(1)
      expect(ll.tail!.value).toBe('a')
    })

    it('delete some node', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')
      ll.push('d')

      const del = ll.delete('b')

      expect(del!.value).toBe('b')
      expect(ll.length).toBe(3)
      expect(ll.head!.value).toBe('a')
      expect(ll.head!.next!.value).toBe('c')
      expect(ll.head!.next!.next!.value).toBe('d')
      expect(ll.tail!.value).toBe('d')
    })
  })

  describe('#delByIndex', () => {
    it('delete nothin when the linked list is empty', () => {
      expect(ll.delByIndex(1)).toBe(null)
      expect(ll.delByIndex(-1)).toBe(null)
    })

    it('delete the onle one node', () => {
      ll.push('a')
      const del = ll.delByIndex(1)

      expect(del!.value).toBe('a')
      expect(ll.length).toBe(0)
      expect(ll.head!).toBe(null)
      expect(ll.tail!).toBe(null)
    })

    it('delete the first node', () => {
      ll.push('a')
      ll.push('b')
      const del = ll.delByIndex(0)

      expect(del!.value).toBe('a')
      expect(ll.length).toBe(1)
      expect(ll.head!.value).toBe('b')
      expect(ll.tail!.value).toBe('b')
    })

    it('delete the last node', () => {
      ll.push('a')
      ll.push('b')
      const del = ll.delByIndex(1)

      expect(del!.value).toBe('b')
      expect(ll.length).toBe(1)
      expect(ll.head!.value).toBe('a')
      expect(ll.tail!.value).toBe('a')
    })

    it('delete some node', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')
      ll.push('d')

      const del = ll.delByIndex(1)

      expect(del!.value).toBe('b')
      expect(ll.length).toBe(3)
      expect(ll.head!.value).toBe('a')
      expect(ll.head!.next!.value).toBe('c')
      expect(ll.head!.next!.next!.value).toBe('d')
      expect(ll.tail!.value).toBe('d')

      // a c d -> a d
      const del2 = ll.delByIndex(-2)
      expect(del2!.value).toBe('c')
      expect(ll.length).toBe(2)
      expect(ll.head!.value).toBe('a')
      expect(ll.tail!.value).toBe('d')
      expect(ll.head!.next!.value).toBe('d')
    })
  })

  describe('#slice', () => {
    it('should slice like an arry', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')
      ll.push('d')

      const newll = ll.slice(1)

      expect(newll).not.toBe(ll)
      expect(newll.head!.value).toBe('b')
      expect(newll.tail!.value).toBe('d')
      expect(newll.length).toBe(3)
    })
  })

  describe('#clear', () => {
    it('should clear the linked list', () => {
      ll.push('a')
      ll.push('b')

      ll.clear()

      expect(ll.length).toBe(0)
      expect(ll.head).toBe(null)
      expect(ll.tail).toBe(null)
    })
  })

  describe('#reverse', () => {
    it('should reverse the linked list', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      ll.reverse()

      expect(ll.length).toBe(3)
      expect(ll.head!.value).toBe('c')
      expect(ll.head!.next!.value).toBe('b')
      expect(ll.head!.next!.next!.value).toBe('a')
      expect(ll.tail!.value).toBe('a')
    })
  })

  describe('#iterator', () => {
    it('should iteratorful!', () => {
      ll.push('a')
      ll.push('b')
      ll.push('c')

      let temp = null

      for(const {node} of ll) {
        if (node.value === 'b') temp = node
      }

      expect(temp!.value).toBe('b')
    })
  })
})