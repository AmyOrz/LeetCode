var rotate = function (nums, k) {
    if (nums.length <= 1)
        return nums;
    nums = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));
    return nums;
};
console.log(rotate([1, 2], 1));
//# sourceMappingURL=189.js.map