class Node {
  constructor(value) {
    this.value = value // value stored in the node
    this.next = null // pointer to the next node
    this.prev = null // pointer to the previous node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null // beginning of the list
    this.tail = null // end of the list
  }

  addToFront(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
  }

  addToEnd(value) {
    const newNode = new Node(value)

    if (!this.tail) {
      this.head = this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
  }

  removeFromFront() {
    if (!this.head) return null

    const removedValue = this.head.value

    if (this.head === this.tail) {
      this.head = this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
    }

    return removedValue
  }

  removeFromEnd() {
    if (!this.tail) return null
    const removedValue = this.tail.value

    if (this.head === this.tail) {
      this.head = this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }

    return removedValue
  }
}

const list = new DoublyLinkedList()


console.log(list.removeFromFront()) 
console.log(list.removeFromEnd())   

list.addToFront(10)
console.log(list.head.value)        
console.log(list.tail.value)        

list.addToFront(20)
console.log(list.head.value)        
console.log(list.head.next.value)   
console.log(list.tail.value)        
console.log(list.tail.prev.value)   

list.addToEnd(30)
console.log(list.tail.value)        
console.log(list.tail.prev.value)   
console.log(list.head.value)        

console.log(list.removeFromFront()) 
console.log(list.head.value)        
console.log(list.tail.value)        

console.log(list.removeFromEnd())   
console.log(list.tail.value)        
console.log(list.head.value)        

console.log(list.removeFromFront()) 
console.log(list.head)              
console.log(list.tail)              

list.addToEnd(100)
list.addToEnd(200)
list.addToEnd(300)
console.log(list.head.value)        
console.log(list.tail.value)        
console.log(list.head.next.value)   
console.log(list.tail.prev.value)   

console.log(list.removeFromEnd())   
console.log(list.removeFromFront()) 
console.log(list.removeFromFront()) 
console.log(list.head)              
console.log(list.tail)              
