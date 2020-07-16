var containsDuplicate = function (nums) {
    if (nums.length <= 0) {
        return false;
    }
    var result = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var item = nums_1[_i];
        result[item] = result[item] == void 0 ? 1 : ++result[item];
    }
    for (var item in result) {
        if (result[item] >= 2) {
            return false;
        }
    }
    return true;
};
var arr = [1, 2, 3, 1];
console.log(containsDuplicate(arr));
//# sourceMappingURL=217.js.map