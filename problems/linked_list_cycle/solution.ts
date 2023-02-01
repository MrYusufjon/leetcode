
function hasCycle(head: ListNode | null): boolean {
    const hashMap = new Map<ListNode,boolean>();
    while(head && head.next) {
        if(hashMap.get(head)) return true;
        hashMap.set(head,true);
        head = head.next;
    }
    return false;
};