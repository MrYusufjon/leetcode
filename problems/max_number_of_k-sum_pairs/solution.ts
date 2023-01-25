function maxOperations(nums: number[], k: number): number {
    const hashTable={};
    for(const num of nums) {
        if(!hashTable[num]) hashTable[num] = 0;
        hashTable[num]++;
    }
    let ans = 0;
    for(const num of nums) {
        if(!hashTable[num]) continue;
        const estimated = k - num;
        if(!hashTable[estimated]) continue;
        if(estimated != num) {
            hashTable[estimated]--;
            hashTable[num]--;
            ans++;
            continue;
        }
        if(hashTable[estimated]>=2) {
            hashTable[estimated]-=2;
            ans++;
        }
    }
    return ans;
};