
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let ans = new ListNode(null);
    ans.next = head;
    
    let tmp1 = ans;
    let tmp2 = ans;
    
    let count = 0, index = 0;
    
    while(tmp1) {
        tmp1 = tmp1.next;
        ++count;
    }

    while(tmp2) {
        ++ index;
        if(count-index == n) {
            tmp2.next = tmp2.next?.next;
        }
        else {
            tmp2 = tmp2.next;
        }
    }
    
    return ans.next;
};