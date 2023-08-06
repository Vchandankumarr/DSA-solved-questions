
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
  let previous = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next; // Store the next node
    current.next = previous; // Reverse the link to the previous node
    previous = current; // Move previous to the current node
    current = next; // Move current to the next node
  }

  // After the loop, 'previous' will be the new head of the reversed linked list
  return previous;
}

