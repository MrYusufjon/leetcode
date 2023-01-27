function isIsomorphic(s: string, t: string): boolean {
    const st={};
    const ts={};
    for(let i=0;i<s.length;i++) {
        if(!st[s[i]] && !ts[t[i]]){
            st[s[i]] = t[i];
            ts[t[i]] = s[i];
        }

        if(st[s[i]] != t[i]) return false;
    }
    return true;
};
