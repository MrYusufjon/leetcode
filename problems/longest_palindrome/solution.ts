function longestPalindrome(s: string): number {
    let ans = 0;
    let reminder = 0;
    const map = {};
    for(const ch of s) {
        if(!map[ch]) map[ch] = 0;
        ++ map[ch];
    }
    Object.keys(map).map(ch => {
        ans += Math.floor(map[ch]/2)*2;
        map[ch] = map[ch] % 2;
        if(map[ch]) reminder = 1;
    })

    return ans + reminder;
};
