function generate(numRows: number): number[][] {
    const ans = [[1]];
    for(let i=1;i<numRows;i++) {
        let arr = [1];
        for(let j=1;j<ans[ans.length-1].length;j++) {
            const el = ans[ans.length-1][j]+ans[ans.length-1][j-1];
            arr.push(el);
        }
        arr.push(1);
        ans.push(arr);
    }
    return ans;
};