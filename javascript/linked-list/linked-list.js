class Node {
  constructor (val=null) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (val) {
    const node = new Node(val)

    if (this.length === 0) {
      this.head = this.tail = node
    } else {
      this.tail = this.tail.next = node
    }

    this.length++
  }
}

module.exports = LinkedList
