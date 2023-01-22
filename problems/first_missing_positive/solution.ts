function firstMissingPositive(nums: number[]): number {
    const map={};
    for(const num of nums) {
        map[num]=true
    }
    for(let i=1;i<=nums.length+1;i++) {
        if(!map[i]) return i;
    }
};