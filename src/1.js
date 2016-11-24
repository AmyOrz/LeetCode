var leetCode = function (arr, target) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] == target && i != j) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};
var array = [0, 4, 3, 0];
leetCode(array, 0);
//# sourceMappingURL=1.js.map