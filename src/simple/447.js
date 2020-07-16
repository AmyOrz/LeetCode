var numberOfBoomerangs = function (points) {
    var len = points.length;
    var count = 0;
    var dist = 0;
    for (var i = 0; i < len; i++) {
        var res = {};
        for (var j = 0; j < len; j++) {
            if (i == j)
                continue;
            else {
                var x = points[i][0] - points[j][0];
                var y = points[i][1] - points[j][1];
                dist = x * x + y * y;
                res[dist] = res[dist] == void 0 ? 1 : ++res[dist];
            }
        }
        for (var m in res) {
            count += (res[m] * (res[m] - 1));
        }
    }
    return count;
};
numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]);
//# sourceMappingURL=447.js.map