var longestCommonPrefix = function (strs) {
    if (strs.length == 0 || strs[0] == "")
        return "";
    strs.sort();
    var first = strs[0];
    var last = strs[strs.length - 1];
    var result = [];
    for (var i = 0; i < first.length; i++) {
        if (last.length > i && first[i] == last[i]) {
            result.push(first[i]);
        }
        else {
            return result.join("");
        }
    }
    return result.join("");
};
console.log(longestCommonPrefix(["c", "acc", "ccc"]));
//# sourceMappingURL=14.js.map