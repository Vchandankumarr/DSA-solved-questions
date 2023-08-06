const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let newnode= new LinkedListNode(data)
    if(head == null){
        return head=newnode
        
    }else{ 
        
        let current = head
        while(current.next!= null){
            current = current.next
        }
    current.next = newnode
    return head
   
    }
}