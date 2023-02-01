
function reverseList(head: ListNode | null): ListNode | null {
    let prv=null,curr=head;
    while(curr) {
        const nxt = curr.next;
        curr.next = prv;
        prv = curr;
        curr = nxt;
    }
    return prv;
};
