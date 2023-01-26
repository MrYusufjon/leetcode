function tribonacci(n: number): number {
    let T0=0,T1=1,T2=1;
    let Tn = 0;
    if(n>0&&n<3) Tn=1;
    for(let i=3;i<=n;i++) {
        Tn = T0 + T1 + T2;
        T0=T1;
        T1=T2;
        T2=Tn;
    }
    return Tn;
};