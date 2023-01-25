function romanToInt(s: string): number {
    const RI = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const answer = {
        last: s[s.length-1],
        value: RI[s[s.length-1]],
    }
    for(let i=s.length-2;i>=0;i--) {
        answer.value+=RI[s[i]]*(RI[answer.last]>RI[s[i]]?-1:1);
        answer.last=s[i];
    }
    return answer.value
};