var maxSubArray = function (nums) {
    if (nums.length == 0)
        return 0;
    var sum = 0;
    var max = -Number.MAX_VALUE;
    for (var i = 0; i < nums.length; i++) {
        if (sum >= 0)
            sum += nums[i];
        else
            sum = nums[i];
        if (sum > max)
            max = sum;
        console.log(max);
    }
    return max;
};
var a = maxSubArray([-1]);
console.log(a);
//# sourceMappingURL=53.js.map