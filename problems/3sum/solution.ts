function threeSum(nums: number[]): number[][] {
    const ans = [];
    const triple=new Set();
    const map = {};
    nums = nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length;i++) {
        map[nums[i]] = i;
    }
    for(let i=0;i<nums.length-2;i++) {
        for(let j=i+1;j<nums.length-1;j++) {
            const k = map[0-nums[i]-nums[j]];
            
            if(k>j ) {
                
                const elem = `${nums[i]}-${nums[j]}-${nums[k]}`
                if(triple.has(elem)) continue;
                triple.add(elem)
                ans.push([
                    nums[i],
                    nums[j],
                    nums[k]
                ])
            }
        }
    }
    return ans;
}