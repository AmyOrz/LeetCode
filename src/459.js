var repeatedSubstringPattern = function (s) {
    if (s == void 0 || s == " ")
        return false;
    if (s.length > 10000)
        return false;
    if (s.length % 2 != 0)
        return false;
    for (var len = s.length, i = len / 2; i >= 1; i--) {
        var child = s.slice(0, i);
        if (len % i == 0) {
            var compareCount = len / i;
            var currentCount = 1;
            var currenIndex = i;
            for (var j = 2; j <= compareCount; j++) {
                var currentSymbol = s.slice(currenIndex, currenIndex + i);
                currenIndex = currenIndex + i;
                if (currentSymbol == child) {
                    currentCount++;
                }
                else {
                    break;
                }
            }
            if (compareCount == currentCount)
                return true;
        }
    }
    return false;
};
var a = repeatedSubstringPattern("abcabcabcabc");
var b = repeatedSubstringPattern("aba");
console.log(a);
console.log(b);
//# sourceMappingURL=459.js.map