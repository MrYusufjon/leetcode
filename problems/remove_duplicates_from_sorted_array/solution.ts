function removeDuplicates(nums: number[]): number {
    for(let i=0;i<nums.length;i++) {
        if(nums[i+1] != nums[i]) continue;
        nums.splice(i--,1);
    }
    return nums.length;
};