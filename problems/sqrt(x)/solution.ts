function mySqrt(x: number): number {
    if(x==0) return 0;
    if(x<4) return 1;
    let i=1;
    for(;i*i<=x;i*=2) {}
    for(i=i/2;i*i<=x;i++) {}
    return i-1;
};