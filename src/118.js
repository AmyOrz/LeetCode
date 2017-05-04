var generate = function (numRows) {
    if (numRows == 1)
        return [[1]];
    var res = [];
    for (var i = 1; i <= numRows; i++) {
        var temp = [];
        temp[0] = 1;
        for (var j = 1; j < i; j++) {
            temp[j] = 0;
            for (var m = j; m >= 1; m--) {
                temp[m] += temp[m - 1];
            }
        }
        res.push(temp);
    }
    return res;
};
console.log(generate(5));
//# sourceMappingURL=118.js.map