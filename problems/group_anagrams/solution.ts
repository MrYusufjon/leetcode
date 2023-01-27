function groupAnagrams(strs: string[]): string[][] {
    const groupMap = {};
    for(const str of strs) {
        const sorted = str.split('').sort().join('');
        if(!groupMap[sorted]) groupMap[sorted]=[];
        groupMap[sorted].push(str)
    }
    return Object.values(groupMap)
};