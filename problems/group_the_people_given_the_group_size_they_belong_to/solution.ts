function groupThePeople(groupSizes: number[]): number[][] {
    const ans=[];
    const hashTable = {};
    for(let i=0;i<groupSizes.length;i++) {
        const size = groupSizes[i];
        if(!hashTable[size]) hashTable[size] = [];
        hashTable[size].push(i);
    }
    for(let i=0;i<groupSizes.length;i++) {
        const size = groupSizes[i];
        if(!hashTable[size].length) continue;
        ans.push(hashTable[size].splice(0,size))
    }
    return ans;
};