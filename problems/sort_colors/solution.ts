function sortColors(nums: number[]): void {
    function solve() {
        const map = {
            0: 0,
            1: 0,
            2: 0,
        }
        for(let i=0;i<nums.length;++i) {
            ++ map[nums[i]];
        }
        for(let i=0;i<nums.length;++i) {
            if(map[1] + map[0]<=i) {
                nums[i] = 2;
            }
            else if(map[0]<=i) {
                nums[i] = 1;
            }
            else {
                nums[i] = 0;
            }
        }
    }
    solve()
};