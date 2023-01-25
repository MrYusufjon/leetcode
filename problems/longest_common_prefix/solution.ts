function longestCommonPrefix(strs: string[]): string {
    let ans = '';
    for(let i=0; i<strs[0].length; i++) {
        let equal = true;
        for(const str of strs) {
            equal = equal && (str[i] == strs[0][i]);
        }
        if(!equal) return ans;
        ans += strs[0][i];
    }
    return ans;
};