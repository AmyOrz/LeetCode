var twoSum = function (arrayOfNumber, target) {
    var NumberAddEqualTarget = [];
    for (var i = 0; i < arrayOfNumber.length; i++) {
        for (var j = i; j < arrayOfNumber.length; j++) {
            if (_NumberAddEqualTargetAndNumberUnLike(i, j)) {
                NumberAddEqualTarget.push(i);
                NumberAddEqualTarget.push(j);
            }
        }
    }
    function _NumberAddEqualTargetAndNumberUnLike(i, j) {
        return arrayOfNumber[i] + arrayOfNumber[j] == target && i != j;
    }
    return NumberAddEqualTarget;
};
var array = [0, 4, 3, 0];
twoSum(array, 0);
//# sourceMappingURL=1.js.map