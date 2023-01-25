function lengthOfLastWord(s: string): number {
    return s.trim().split(' ').reverse()[0].length
};