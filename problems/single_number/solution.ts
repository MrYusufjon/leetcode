function singleNumber(nums: number[]): number {
    const singleMap = {};
    for(const num of nums) {
        if(!singleMap[num]) {
            singleMap[num]=0;
        }
        singleMap[num] ++;
    }
    for(const num of nums) {
        if(singleMap[num] == 1) {
            return num
        }
    }
};