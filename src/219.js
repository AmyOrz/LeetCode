var containsNearbyDuplicate = function (nums, k) {
    var hashT = {}, pt = 0;
    for (var i = 0; i < nums.length; i++) {
        if (hashT[nums[i]] === undefined) {
            hashT[nums[i]] = i;
        }
        else if (pt == 0) {
            pt = i - hashT[nums[i]];
            hashT[nums[i]] = i;
        }
        else if ((i - hashT[nums[i]]) < pt)
            pt = i - hashT[nums[i]];
    }
    if (pt <= k && pt !== 0)
        return true;
    else
        return false;
};
//# sourceMappingURL=219.js.map