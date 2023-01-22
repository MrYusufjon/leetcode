function singleNumber(nums: number[]): number[] {
    const map={};
    for(const num of nums) {
        if(!map[num])map[num]=0
        map[num] ++
    }
    const ans=[];
    for(const num of nums) {
        if(map[num]==1) ans.push(num);
    }
    return ans;
};