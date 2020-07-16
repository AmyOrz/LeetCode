var intersection = function (nums1, nums2) {
    var result = {};
    var minArr = nums1.length > nums2.length ? nums1 : nums2;
    var maxArr = minArr.length == nums1.length ? nums2 : nums1;
    for (var i = 0, len = minArr.length; i < len; i++) {
        var index = maxArr.indexOf(minArr[i]);
        if (index != -1)
            result[minArr[i]] = 1;
    }
    return Object.keys(result).map(function (item) { return item | 0; });
};
var a = intersection([1, 2, 4, 6, 2], [2, 2, 3]);
console.log(a);
//# sourceMappingURL=349.js.map