var longestCommonPrefix = function (strs) {
    if (strs.length == 0)
        return "";
    var result = {};
    var max = 0;
    var maxIndex = "0";
    for (var i = 0; i < strs.length; i++) {
        result[i] = strs[i].length;
    }
    for (var item in result) {
        if (result[item] > max) {
            max = result[item];
            maxIndex = item;
        }
    }
    return strs[Number(maxIndex)];
};
console.log(longestCommonPrefix(["asd", "asdergerg", "rthjujyujuy", "vtg"]));
//# sourceMappingURL=14.js.map