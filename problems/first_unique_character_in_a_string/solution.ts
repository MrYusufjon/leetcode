function firstUniqChar(s: string): number {
    const map={};
    for(const ch of s) {
        if(!map[ch]) map[ch] = 0;
        map[ch] ++;
    }
    for(let i=0;i<s.length;i++) {
        if(map[s[i]] == 1) return i;
    }
    return -1;
};