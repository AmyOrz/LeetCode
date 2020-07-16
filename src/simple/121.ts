let maxProfit = (prices:number[]):number=>{
    let max = 0;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < prices.length; i++){
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
        console.log(min+","+max)
    }
    return max;
};
console.log(maxProfit([1,17, 2, 5, 3, 6, 4]));
