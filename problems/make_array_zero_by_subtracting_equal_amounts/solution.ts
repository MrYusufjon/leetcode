function minimumOperations(nums: number[]): number {
    const map = {};
    let ans=0;
    for(const n of nums) {
        if(!map[n]) {
            map[n] = 1;
            if(n!=0){
                ans ++;
            }
        }
    }
    return ans;
};