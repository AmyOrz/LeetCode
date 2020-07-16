var rob = function (nums) {
    if (nums.length === 0)
        return 0;
    var n = nums.length;
    var result = [nums[0], Math.max(nums[0], nums[1])];
    for (var i = 2; i < n; i++) {
        result.push(Math.max(result[i - 2] + nums[i], result[i - 1]));
    }
    console.log(result[n - 1]);
    return result[n - 1];
};
rob([1, 21, 436, 4567, 568, 78978, 2]);
//# sourceMappingURL=198.js.map