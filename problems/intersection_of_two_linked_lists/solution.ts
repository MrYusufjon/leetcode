
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const map = new Map<ListNode,boolean>();
    while(headA) {
        map.set(headA,true);
        headA = headA.next;
    }
    while(headB) {
        if(map.get(headB)) return headB;
        headB = headB.next;
    }
    return null;
};