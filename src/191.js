var hammingWeight = function (n) {
    var binaryStr = n.toString(2);
    var result = 0;
    if (binaryStr.length > 32)
        return;
    for (var i = 0; i < binaryStr.length; i++) {
        if (Number(binaryStr[i]) == 1) {
            result++;
        }
    }
    return result;
};
hammingWeight(11);
//# sourceMappingURL=191.js.map