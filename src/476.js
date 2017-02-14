var findComplement = function (num) {
    var binary = num.toString(2);
    var result = "";
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == "0")
            result += "1";
        else if (binary[i] == "1")
            result += "0";
    }
    return parseInt(result, 2);
};
var a = findComplement(2);
console.log(a);
//# sourceMappingURL=476.js.map