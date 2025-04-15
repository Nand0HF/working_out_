//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}


export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.counter = 0;
  }

  isEmpty () {
    return this.counter === 0;
  }
    
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.counter ++;
  }

  pop() {
    if (this.isEmpty ()) {
      return null;
    }
    
    const currentTailData = this.tail.data;
    
    if (this.counter === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    
    this.counter --;
    return currentTailData;
  }

  shift() {
    if (this.isEmpty ()) {
      return null;
    }
    
    const currentHeadData = this.head.data;
    
    if (this.counter === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    
    this.counter --;
    return currentHeadData;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.counter ++;
  }

  delete(value) {
    if (this.isEmpty ()) {
      return null;
    }
    
    let pointer = this.head;
    while (pointer) {
      if (pointer.data === value) {
        if (pointer === this.head) {
          this.shift();
        } else if (pointer === this.tail) {
          this.pop();
        } else {
          pointer.prev.next = pointer.next;
          pointer.next.prev = pointer.prev;
          this.counter --;
        }
        return;
      } else {
        pointer = pointer.next;
      }
    }
  }

  count() {
    return this.counter;
  }
}


