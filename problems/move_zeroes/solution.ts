/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let count=0;
    for(const n of nums) {
        if(!n) ++count;
    }
    for(let i=0;i<nums.length;i++) {
        if(nums[i] == 0 && count) {
            nums.splice(i,1);
            nums.push(0);
            i--;
            count--;
        }
    }
};