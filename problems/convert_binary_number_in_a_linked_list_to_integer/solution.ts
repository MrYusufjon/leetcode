
function getDecimalValue(head: ListNode | null): number {
    let prv = head;
    let count = 0;
    while(prv) {
        ++ count;
        prv = prv.next;
    }
    let ans=0;
    while(head) {
        -- count;
        if(!count) {
            ans += head.val ? 1 : 0;
        }
        else {
            ans += head.val ? 2 << count-1 : 0;
        }
        head = head.next;
    }
    return ans;
};