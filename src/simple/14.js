var longestCommonPrefix = function (arrayOfString) {
    if (arrayOfString.length == 0 || arrayOfString[0] == "")
        return "";
    arrayOfString.sort();
    var firstStringInArray = arrayOfString[0];
    var lastStringInArray = arrayOfString[arrayOfString.length - 1];
    var arrayOfCommonPrefix = [];
    for (var i = 0; i < firstStringInArray.length; i++) {
        if (_lastArrayLenThanTraverseAndFirstEqualLast(i)) {
            arrayOfCommonPrefix.push(firstStringInArray[i]);
        }
        else {
            return arrayOfCommonPrefix.join("");
        }
    }
    function _lastArrayLenThanTraverseAndFirstEqualLast(traverse) {
        return lastStringInArray.length > traverse && firstStringInArray[traverse] == lastStringInArray[traverse];
    }
    return arrayOfCommonPrefix.join("");
};
console.log(longestCommonPrefix(["c", "ccc", "ccc"]));
//# sourceMappingURL=14.js.map