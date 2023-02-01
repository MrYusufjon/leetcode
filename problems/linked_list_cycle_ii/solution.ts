
function detectCycle(head: ListNode | null): ListNode | null {
    const listMap = new Map<ListNode,boolean>();
    while(head) {
        if(listMap.get(head)) return head;
        listMap.set(head,true)
        head = head.next;
    }
    return null;
};
