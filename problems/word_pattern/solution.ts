function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');
    if(pattern.length != words.length) return false;
    const pw = {};
    const wp = {};
    for (let i = 0; i < pattern.length; i++) {
        if (!pw['_'+pattern[i]] && !wp['_'+words[i]]) {
            pw['_'+pattern[i]] = words[i];
            wp['_'+words[i]] = pattern[i];
        }

        if (pw['_'+pattern[i]] != words[i]) return false;
    }
    return true;
};