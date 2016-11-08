var findTheDifference = function (s, t) {
    if (s == void 0 || t == void 0)
        return;
    var result = t.split("");
    for (var i = 0; i < s.length; i++) {
        if (result.indexOf(s[i]) >= 0) {
            result.splice(result.indexOf(s[i]), 1);
        }
        else {
            result.push(s[i]);
        }
    }
    return result.join("");
};
findTheDifference("asd", "asdq");
//# sourceMappingURL=389.js.map