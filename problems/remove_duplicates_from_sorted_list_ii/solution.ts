
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let ans: ListNode = new ListNode();
    let tmp: ListNode = ans;
    const exst = {};

    while(head) {
        if(head.val == head.next?.val) exst[head.val] = true;
        if(!exst[head.val]) {
            tmp.next = new ListNode(head?.val, null);
            tmp = tmp.next;
        }
        head = head.next;
    }

    return ans.next;
};
