function isSubsequence(s: string, t: string): boolean {
    let left=0;
    for(let i=0;i<s.length;i++) {
        let exist=false;
        for(let j=left;j<t.length;j++) {
            if(t[j] == s[i]) {
                exist = true;
                left = j + 1;
                break;
            }
        }
        if(!exist) return false;
    }

    return true;
};