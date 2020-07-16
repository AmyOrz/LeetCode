var missingNumber = function (nums) {
    if (nums.length == 1) {
        if (nums[0] == 0)
            return 1;
        else
            return 0;
    }
    var start = -1;
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length; i++) {
        if ((nums[i] - start) > 1)
            return start + 1;
        start++;
    }
    return start + 1;
};
console.log(missingNumber([1, 0]));
//# sourceMappingURL=268.js.map