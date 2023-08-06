const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

let  rotateRight = function(head, k) {
    if (!head) return null;
    let node = head, n = 1;
    while (node.next) {
        node = node.next;
        n++;
    }
    k %= n;
    node.next = head;
    for (let i = 0; i < n - k; i++) {
        node = node.next;
    }
    head = node.next;
    node.next = null;
    return head;


};