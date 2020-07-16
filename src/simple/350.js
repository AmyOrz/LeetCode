var intersect = function (nums1, nums2) {
    if (nums1.length == 0 || nums2.length == 0)
        return [];
    var result = [];
    for (var i = 0; i < nums1.length; i++) {
        var index = nums2.indexOf(nums1[i]);
        if (index >= 0) {
            result.push(nums2.splice(index, 1)[0]);
        }
    }
    return result;
};
var a = intersect([2, 1], [1, 2]);
//# sourceMappingURL=350.js.map