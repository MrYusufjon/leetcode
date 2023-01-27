function isPalindrome(s: string): boolean {
    const own = s.toLowerCase().split('').map(l=>/[a-z0-9]/.test(l)?l:'').join('')
    const reversed = own.split('').reverse().join('')
    return own == reversed;
};