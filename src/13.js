var romanToInt = function (s) {
    var hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var lastChar = hash[s[0]];
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var current = hash[s[i]];
        if (lastChar < current) {
            result = result - (lastChar * 2) + current;
        }
        else {
            lastChar = current;
        }
    }
    return result;
};
//# sourceMappingURL=13.js.map