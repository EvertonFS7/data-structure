class Solution {
  reverseList(head) {
    let newList = null  
 
    while (head) { 
      let nextNode = head.next 
      head.next = newList // reverse the pointer: point current node to new list
      newList = head   // move newList pointer to current node
      head = nextNode // move head forward to the next node
    } 
 
    return newList 
  }
}
