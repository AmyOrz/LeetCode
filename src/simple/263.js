var isUgly = function (num) {
    if (num <= 0)
        return false;
    if (num == 1)
        return true;
    for (var _i = 0, _a = [2, 3, 5]; _i < _a.length; _i++) {
        var i = _a[_i];
        while (num && num % i == 0)
            num /= i;
    }
    return num == 1;
};
isUgly(6);
//# sourceMappingURL=263.js.map