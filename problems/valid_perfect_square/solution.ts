function isPerfectSquare(num: number): boolean {
    let left=0,right=num;
    while(left<right) {
        const midd = Math.ceil((left+right)/2);
        if(midd*midd == num) return true;
        if(midd*midd > num) {
            right = midd-1;
        }
        else {
            left = midd;
        }
    }
    return false;
};