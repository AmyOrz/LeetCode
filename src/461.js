var hammingDistance = function (x, y) {
    if (x < 0 || y < 0 || x > Number.MAX_VALUE || y > Number.MAX_VALUE)
        return -1;
    var count = 0;
    var exc = x ^ y;
    while (exc) {
        ++count;
        exc &= (exc - 1);
    }
    return count;
};
var a = hammingDistance(7, 6);
console.log(a);
//# sourceMappingURL=461.js.map