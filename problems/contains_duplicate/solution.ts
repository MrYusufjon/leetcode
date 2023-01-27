function containsDuplicate(nums: number[]): boolean {
    const map={};
    for(const n of nums) {
        if(map[n]) return true;
        map[n]=1;
    }
    return false;
};