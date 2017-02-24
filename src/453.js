var minMoves = function (nums) {
    if (nums.length == 0)
        return 0;
    var result = 0;
    var min = nums[0];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        min = Math.min(min, n);
    }
    for (var _a = 0, nums_2 = nums; _a < nums_2.length; _a++) {
        var n = nums_2[_a];
        result += (n - min);
    }
    console.log(result);
    return result;
};
minMoves([1, 2, 3]);
//# sourceMappingURL=453.js.map