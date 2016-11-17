var removeDuplicates = function (nums) {
    if (nums.length == 0 || nums.length == 1)
        return 0;
    var i = nums.length - 1;
    while (i >= 0) {
        if (nums[i - 1] == nums[i]) {
            nums.splice(i, 1);
        }
        i--;
    }
    return nums.length;
};
removeDuplicates([1, 1, 3, 4, 3, 2, 2]);
//# sourceMappingURL=26.js.map