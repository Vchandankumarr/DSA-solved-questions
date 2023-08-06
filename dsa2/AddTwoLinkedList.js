
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
    
    let temp = new ListNode(0);
    
    let curr = temp , carry = 0;
    
    while(l1 != null || l2 != null){
        sum = 0;
        if(l1 != null){
            sum +=l1.val;
            l1 = l1.next;
            
        }
        if(l2 != null){
            sum +=l2.val;
            l2 = l2.next;
            
        }
        
        sum  = sum + carry;
        carry = Math.floor(sum/10)
        let temp2 = new ListNode(sum %10)
        curr.next = temp2
        curr = curr.next
    }
    return temp.next
    
};

