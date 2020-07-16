var findRelativeRanks = function (nums) {
    var scores = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    var tempIndex = [];
    var tempVal = nums;
    var result = [];
    for (var i = 0, len = nums.length; i < len; i++) {
        tempIndex.push(i);
    }
    for (var i = 0, len = nums.length; i < len; i++) {
        var max = i;
        for (var j = i + 1; j < len; j++) {
            if (tempVal[j] > tempVal[max]) {
                max = j;
            }
        }
        if (i != max)
            exchange(i, max);
    }
    function exchange(i, max) {
        var tIndex = tempIndex[i];
        var tVal = tempVal[i];
        tempIndex[i] = tempIndex[max];
        tempVal[i] = tempVal[max];
        tempIndex[max] = tIndex;
        tempVal[max] = tVal;
    }
    for (var i = 0, len = tempIndex.length; i < len; i++) {
        switch (i) {
            case 0:
                result[tempIndex[i]] = scores[i];
                break;
            case 1:
                result[tempIndex[i]] = scores[i];
                break;
            case 2:
                result[tempIndex[i]] = scores[i];
                break;
            default:
                result[tempIndex[i]] = i + 1 + "";
                break;
        }
    }
    console.log(result);
    return result;
};
findRelativeRanks([10, 3, 8, 9, 4]);
//# sourceMappingURL=506.js.map