const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var intersectAndReverse = function (head1, head2) {
    
    let data1= head1
    let arr = [];
    while(data1 != null){
        arr.push(data1.data)
        data1 = data1.next
    }
    
    let data2 = head2
    let arr2 = [];
    while(data2 != null){
        arr2.push(data2.data)
        data2 = data2.next
    }
    
    arr = arr.reverse()
    arr2 = arr2.reverse()
    let res=  [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] == arr2[i]){
            res.push(arr[i])
        }else{
            break;
        }
    }
    console.log(res.join(" "))
    
    
    
};


