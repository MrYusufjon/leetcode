function intersection(nums1: number[], nums2: number[]): number[] {
    const map={};
    for(const n of nums1) {
        map[n] = 1;
    }
    const ans = [];
    for(const n of nums2) {
        if(map[n] == 1) {
            ans.push(n);
            map[n] ++;
        }
    }
    return ans;
};