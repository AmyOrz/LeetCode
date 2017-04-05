var maxSubArray = function(nums:number[]):number{
    if(nums.length == 0)return 0;

    let sum = 0;
    let max = -Number.MAX_VALUE;
    for(let i = 0;i<nums.length;i++){
        if(sum >= 0)
            sum += nums[i];
        else
            sum = nums[i];

        if(sum > max)
            max = sum;
    }
    return max;
};
var a = maxSubArray([-1]);
console.log(a)