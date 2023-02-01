function middleNode(head: ListNode | null): ListNode | null {
    let fast: ListNode = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        head = head.next;
    }
    return head;
};