var firstUniqChar = function (s) {
    if (s.length == 1)
        return 0;
    for (var i = 0, len = s.length; i < len; i++) {
        var repeatIndex = 0;
        var min = 0;
        var max = len;
        while (min < max) {
            if (s[min++] == s[i])
                repeatIndex++;
            if (s[--max] == s[i])
                repeatIndex++;
            if (repeatIndex > 1)
                break;
        }
        if (repeatIndex == 1) {
            return i;
        }
    }
    return -1;
};
var a = firstUniqChar("aaddadadad");
console.log(a);
//# sourceMappingURL=387.js.map