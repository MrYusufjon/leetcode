/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left=0,right=n,ans=0,lastMidd;
        while(left<right) {
            const midd = Math.floor((left+right)/2);
            if(lastMidd == midd) return midd+1;
            lastMidd=midd;
            if(isBadVersion(midd)) {
                ans = midd;
                right = midd;
            }
            else {
                left = midd;
            }
        }
        return ans+1;
    };
};