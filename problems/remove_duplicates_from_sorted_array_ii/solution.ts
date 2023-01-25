function removeDuplicates(nums: number[]): number {
    for(let i=1;i<nums.length-1;i++) {
        if(
            nums[i+1] != nums[i] ||
            nums[i-1] != nums[i]
        ) continue;
        nums.splice(i--,1);
    }
    return nums.length;
};