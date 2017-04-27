var getRow = function (rowIndex) {
    var arr = [];
    arr[0] = 1;
    for (var i = 1; i < rowIndex + 1; i++) {
        arr[i] = 0;
        for (var j = i; j >= 1; j--) {
            arr[j] += arr[j - 1];
        }
    }
    return arr;
};
var a = getRow(3);
console.log(a);
//# sourceMappingURL=119.js.map