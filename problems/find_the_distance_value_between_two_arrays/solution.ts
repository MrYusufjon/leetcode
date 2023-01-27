
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let ans = 0;
    for(const el of arr1) {
        let count = true;
        for(const el2 of arr2) {
            count = count && Math.abs(el-el2) > d;
        }
        ans += Number(count);
    }
    return ans;
};