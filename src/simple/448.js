var findDisappearedNumbers = function (nums) {
    if (nums.length == 0 || nums.length == 1)
        return nums;
    var min = nums[0];
    var max = nums[0];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var item = nums_1[_i];
        if (item < min)
            min = item;
        if (item > max)
            max = item;
    }
    for (var i = min; i <= max; i++) {
        if (nums.indexOf(i) >= 0) {
            while (nums.indexOf(i) >= 0) {
                nums.splice(nums.indexOf(i), 1);
            }
        }
        else {
            nums.push(i);
        }
    }
    return nums;
};
findDisappearedNumbers([1, 2, 3, 5, 7, 9, 3, 5, 2, 6]);
//# sourceMappingURL=448.js.map