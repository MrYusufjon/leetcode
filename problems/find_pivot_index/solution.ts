function pivotIndex(nums: number[]): number {
    const total = nums.reduce((a,b)=>a+b,0);
    let ind = 0;
    let left = 0;
    for(const num of nums) {
        if(total - num == 2 * left) return ind;
        ind ++;
        left += num;
    }
    return -1;
};