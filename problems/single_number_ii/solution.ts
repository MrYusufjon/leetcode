function singleNumber(nums: number[]): number {
    const map = {};
    const num_set:number[]=[];
    for(const n of nums) {
        if(!map[n]){
            map[n]=0;
            num_set.push(n);
        }
        map[n]++;
    }
    for(const n of num_set) {
        if(map[n] == 1) return n;
    }
};