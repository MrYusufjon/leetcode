

function binarySearch(nums: number[], target: number, fromIndex: number, toIndex: number, step=1): number {

    if(
        (
            fromIndex+1 == toIndex ||
            fromIndex == toIndex
        )
        &&
        nums[fromIndex] < target
        && 
        target < nums[toIndex]
    ) {
        return fromIndex+1;
    }
    if(
        nums[fromIndex] == target
    ) {
        return fromIndex;
    }

    const middleIndex = Math.floor((fromIndex+toIndex)/2);
    if(nums[middleIndex]<=target) {
        return binarySearch(nums, target, middleIndex, toIndex,step+1);
    }

    return binarySearch(nums, target, fromIndex, middleIndex,step+1);
};

function searchInsert(nums: number[], target: number): number {
    if(nums[nums.length-1]<target) return nums.length
    if(nums[0]>target) return 0
    return binarySearch(nums, target, 0, nums.length);
};
