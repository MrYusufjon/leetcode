
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let list3: ListNode = new ListNode();
    let prevNode: ListNode = list3;

    while(list1 && list2) {
        if(list1?.val <= list2?.val) {
            prevNode.next = new ListNode(list1?.val, null);
            list1 = list1?.next;
        } else {
            prevNode.next = new ListNode(list2?.val, null);
            list2 = list2?.next;
        }
        prevNode = prevNode.next;
    }
    while(list1) {
        prevNode.next = new ListNode(list1?.val, null);
        list1 = list1?.next;
        prevNode = prevNode.next;
    }
    while(list2) {
        prevNode.next = new ListNode(list2?.val, null);
        list2 = list2?.next;
        prevNode = prevNode.next;
    }
    return list3.next;
};
