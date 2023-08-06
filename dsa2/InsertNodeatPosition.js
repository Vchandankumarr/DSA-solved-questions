const LinkedListNode = class {
    constructor(nodeData) {
      this.data = nodeData;
      this.next = null;
    }
  };
  
  function insertNodeAtPosition(head, data, position) {
    const newNode = new LinkedListNode(data);
  
    if (position === 0) {
      newNode.next = head;
      head = newNode;
      return head;
    }
  
    let currentPosition = 0;
    let current = head;
    let previous = null;
  
    while (currentPosition < position) {
      previous = current;
      current = current.next;
      currentPosition++;
    }
  
    previous.next = newNode;
    newNode.next = current;
    return head;
  }
  