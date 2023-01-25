function twoSum(nums: number[], target: number): number[] {
    const numsMap = {}
    
    for(let i=0;i<nums.length;i++) {
        numsMap[nums[i]] = i;
    }
    for(let i=0;i<nums.length;i++) {
        const estimated = target-nums[i];
        if(
            typeof numsMap[estimated] == 'number' && 
            numsMap[estimated] != i
        ) return [i+1,numsMap[estimated]+1]; 
    }
};