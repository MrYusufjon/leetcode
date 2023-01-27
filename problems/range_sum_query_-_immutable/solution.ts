class NumArray {
    constructor(public nums: number[]) {

    }

    sumRange(left: number, right: number): number {
        let ans = 0;
        for(let i=left;i<=right;i++) ans+=this.nums[i];
        return ans;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */