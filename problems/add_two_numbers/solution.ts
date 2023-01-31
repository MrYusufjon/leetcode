
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head = new ListNode();
    let tmp = head;
    let reminder = 0;
    while(l1 || l2 || reminder) {
        const sum = (l1?.val || 0) + (l2?.val || 0);
        const digit = (sum+reminder)%10;
        reminder = Math.floor((sum+reminder)/10);
        tmp.next = new ListNode(digit);
        l1 = l1?.next;
        l2 = l2?.next;
        tmp = tmp.next;
    }
    return head.next;
};
