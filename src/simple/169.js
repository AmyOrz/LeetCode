var majorityElement = function (nums) {
    if (nums.length == 0)
        return 0;
    if (nums.length == 1)
        return nums[0];
    var resObj = {};
    var max = 0;
    var maxEle = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var val = nums_1[_i];
        if (resObj[val] == null)
            resObj[val] = 1;
        else
            resObj[val]++;
    }
    for (var val in resObj) {
        if (resObj[val] > max) {
            max = resObj[val];
            maxEle = ~~val;
        }
    }
    console.log(max);
    console.log(nums.length);
    if (max > nums.length / 2)
        return maxEle;
    else
        return 0;
};
// var a = majorityElement([4,2,4,4,7,7,4,6,57,4,4,4,5,4,4]);
var a = majorityElement([2, 2]);
console.log(a);
//# sourceMappingURL=169.js.map