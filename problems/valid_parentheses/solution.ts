function isValid(s: string): boolean {
    let tmp:string[] = [''];
    const isClose = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for(const ch of s) {
        if(isClose[tmp[tmp.length-1]] == ch) tmp.pop()
        else tmp.push(ch)
    }
    return tmp.length == 1;
};