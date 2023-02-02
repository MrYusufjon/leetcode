function searchRange(nums: number[], target: number): number[] {
    const ans = [nums.length, -1];

    function search(start: number, end: number) {
        if(start > end) return;

        const mid = Math.floor((start + end) / 2);
        if(target === nums[mid]) {
            if(mid < ans[0]) {
                ans[0] = mid;
                search(start, mid - 1);
            }
            if(mid > ans[1]) {
                ans[1] = mid;
                search(mid + 1, end);
            }
        } else if(target > nums[mid]) {
            search(mid + 1, end);
        } else {
            search(start, mid - 1);
        }
    }
    search(0, nums.length - 1);
    return ans[1] === -1 ? [-1, -1] : ans;
}