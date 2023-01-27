function canConstruct(ransomNote: string, magazine: string): boolean {
    const map={};
    for(const m of magazine) {
        if(!map[m]) map[m] = 0;
        map[m] ++;
    }
    for(const n of ransomNote) {
        if(!map[n]) return false;
        map[n] --;
    }
    return true;
};