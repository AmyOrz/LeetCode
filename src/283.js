var moveZeroes = function (nums) {
    var result = [];
    nums = nums.sort(function (a, b) { return b - a; });
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var item = nums_1[_i];
        if (item == 0) {
            result.push(0);
        }
        else {
            result.unshift(item);
        }
    }
    return result;
};
var arr = [0, 2, 546, 7, 2, 34, 0];
console.log(moveZeroes(arr));
//# sourceMappingURL=283.js.map