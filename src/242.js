var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    var result = {};
    for (var i = 0; i < s.length; i++) {
        result[s[i]] = result[s[i]] == void 0 ? 0 : ++result[s[i]];
    }
    for (var i = 0; i < t.length; i++) {
        result[t[i]] = result[t[i]] == void 0 ? null : --result[t[i]];
    }
    for (var item in result) {
        if (result[item] != 0) {
            return false;
        }
    }
    return true;
};
var s = "aacc";
var t = "ccac";
console.log(isAnagram(s, t));
//# sourceMappingURL=242.js.map