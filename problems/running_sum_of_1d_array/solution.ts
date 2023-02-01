function runningSum(nums: number[]): number[] {
    let sum=0;
    return nums.map(n => {
        const num = sum+n;
        sum += n;
        return num;
    })
};