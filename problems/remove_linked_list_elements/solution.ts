
function removeElements(head: ListNode | null, val: number): ListNode | null {
    let ans = new ListNode();
    let prv = ans;
    while(head) {
        if(head.val != val) {
            prv.next = new ListNode(head.val);
            prv = prv.next;
        }
        head = head.next;
    }
    return ans.next;
};