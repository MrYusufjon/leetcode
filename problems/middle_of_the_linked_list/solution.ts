function middleNode(head: ListNode | null): ListNode | null {
    let fast: ListNode = head;
    while(fast) {
        if(!fast.next) return head;
        fast = fast.next.next;
        head = head.next;
    }
    return head;
};