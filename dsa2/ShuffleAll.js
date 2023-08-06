const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var shuffle = function (head) {
    let arr =[]
    let current =head;
    while(current !==null){
        arr.push(current.data)
        current = current.next
    }
    let arr2 = []
    let i=0
    while(arr.length!==0){
        if(i%2===0){
            arr2.push(arr.shift())
        }else{
            arr2.push(arr.pop())
        }
        i++
    }
    let head2 = new LinkedListNode(arr2[0]);
    let node = head2
    for(let i=1;i<arr2.length;i++){
        let newNode = new LinkedListNode(arr2[i])
        node.next = newNode;
        node = node.next
    }
    return head2
};