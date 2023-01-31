
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let tmp: ListNode = head;
    
    while(tmp) {
        if(tmp.val == tmp.next?.val) {
            tmp.next = tmp.next?.next;
        }
        else {
            tmp = tmp.next;
        }
    }

    return head;
};
