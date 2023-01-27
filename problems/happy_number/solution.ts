function isHappy(n: number): boolean {
    const map = {};
    while(n > 1) {
        if(map[n]) return false;
        map[n] = 1;
        n = (''+n).split('').map(d=>(+d)*(+d)).reduce((a,b)=>a+b,0);
    }
    return true;
};