const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
   let curr=head,
   temp_Position=0;
   
   while(temp_Position < position-1){
       curr=curr.next;
       temp_Position++;
   }
   let temp=curr.next.next;
   curr.next=temp
   return head
}