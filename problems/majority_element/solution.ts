function majorityElement(nums: number[]): number {
    const count = {};
    for(const n of nums) {
        if(!count[n]) count[n] = 0;
        ++ count[n];
        if(count[n]>nums.length/2) return n;
    }
};