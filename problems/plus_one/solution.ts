
function plusOne(digits: number[]): number[] {
    let notUsed = true;
    for(let i=digits.length-1;i>=0;i--) {
        if(!notUsed) break;
        if(digits[i]+1==10) {
            digits[i] = 0;
        }
        else {
            digits[i] = digits[i]+1
            notUsed = false;
        }
    }
    if(notUsed) {
        digits = [1,...digits]
    }
    return digits;
};
