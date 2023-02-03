function isPalindrome(head: ListNode | null): boolean {
    let reversed=null,curr=head,copy=new ListNode(0);
    let copyPrv = copy;
    while(head) {
        copyPrv.next = new ListNode(head.val);
        head = head.next;
        copyPrv = copyPrv.next;
    }
    copy = copy.next;
    
    while(curr) {
        const nxt = curr.next;
        curr.next = reversed;
        reversed = curr;
        curr = nxt;
    }
    while(copy) {
        if(reversed.val != copy.val) return false;
        reversed = reversed.next;
        copy = copy.next;
    }
    return true;
};