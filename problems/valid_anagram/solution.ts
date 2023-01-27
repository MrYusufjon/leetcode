function isAnagram(s: string, t: string): boolean {
    if(s.length!=t.length) return false;
    const map={};
    for(const ch of s) {
        if(!map[ch]) map[ch]=0;
        ++ map[ch];
    }
    for(const ch of t) {
        if(!map[ch] || map[ch] == 0) return false;
        --map[ch];
    }
    return true;    
};