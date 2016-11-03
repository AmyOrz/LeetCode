var isValid = function (s) {
    if (s.length % 2 != 0)
        return false;
    var enterSymbol = ["(", ")", "{", "}", "[", "]"];
    var interval = s.length / 2;
    var result = [];
    for (var i = 0, len = s.length; i < len; i++) {
        if (enterSymbol.indexOf(s[i]) % 2 == 0) {
            result.push(s[i]);
        }
        else {
            var symbol = result.pop();
            if (enterSymbol[enterSymbol.indexOf(symbol) + 1] != s[i]) {
                return false;
            }
        }
    }
    if (result.length > 0)
        return false;
    return true;
};
console.log(isValid("(("));
//# sourceMappingURL=20.js.map