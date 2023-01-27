function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map={};
    for(let i=0;i<nums.length;i++) {
        if(map[nums[i]] && i+1-map[nums[i]]<=k) return true;
        map[nums[i]]=i+1;
    }
    return false;
};