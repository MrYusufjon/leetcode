function removeElement(nums: number[], val: number): number {
    for(let i=0;i<nums.length;i++) {
        if(nums[i] != val) continue;
        nums.splice(i--,1);
    }
    return nums.length;
};