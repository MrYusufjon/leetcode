function intersect(nums1: number[], nums2: number[]): number[] {
    const map={};
    for(const n of nums1) {
        if(!map[n]) map[n]=0;
        map[n]++;
    }
    const ans = [];
    for(const n of nums2) {
        if(map[n]) {
            ans.push(n);
            map[n] --;
        }
    }
    return ans;
};