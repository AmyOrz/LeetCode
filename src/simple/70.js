var climbStairs = function (n) {
    var a = 1;
    var b = 1;
    while (n--)
        a = (b += a) - a;
    return a;
};
//# sourceMappingURL=70.js.map