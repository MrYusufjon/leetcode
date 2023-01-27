function isPowerOfThree(n: number): boolean {
    if(!n) return false;
    const power = Math.floor(Math.log(n)/Math.log(3)*Math.pow(10,10))/Math.pow(10,10);
    return power == Math.floor(power);
};