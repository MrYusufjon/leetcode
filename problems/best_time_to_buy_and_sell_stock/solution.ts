
function maxProfit(prices: number[]): number {
    let diff = 0;
    let len = prices.length;
    let left = prices[0];
    for(let i = 1;i < len;i ++) {
        if(diff < prices[i] - left) {
            diff = prices[i]-left;
        }
        else if(left > prices[i]) left = prices[i];
    }
    return diff;
};
