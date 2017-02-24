let minMoves = (nums:number[]):number=>{
    if(nums.length == 0)return 0;
    let result:number = 0;
    let min:number = nums[0];
    for(let n of nums)min = Math.min(min,n);
    for(let n of nums)result += (n - min);

    console.log(result)
    return result;
};
minMoves([1,2,3]);