class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function findMiddle(head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode();
  let tail = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 || l2;
  return dummy.next;
}

function mergeSort(head) {
  if (!head || !head.next) return head;
  const middle = findMiddle(head);
  const afterMiddle = middle.next;
  middle.next = null;
  const left = mergeSort(head);
  const right = mergeSort(afterMiddle);
  return mergeTwoLists(left, right);
}

function buildLinkedList(values) {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

function printLinkedList(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result);
}

const values = [4, 2, 1, 3];
console.log("Unsorted Linked List:", values);
const head = buildLinkedList(values);
const sortedHead = mergeSort(head);
console.log("Sorted Linked List:");
printLinkedList(sortedHead);
