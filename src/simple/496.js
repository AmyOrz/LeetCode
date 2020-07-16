var nextGreaterElement = function (findNums, nums) {
    var result = [];
    for (var _i = 0, findNums_1 = findNums; _i < findNums_1.length; _i++) {
        var i = findNums_1[_i];
        var temp = nums.indexOf(i);
        var isFind = false;
        while (temp <= nums.length) {
            temp++;
            if (nums[temp] > i) {
                result.push(nums[temp]);
                isFind = true;
                break;
            }
        }
        if (isFind == false) {
            result.push(-1);
        }
    }
    console.log(result);
    return result;
};
nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]);
//# sourceMappingURL=496.js.map