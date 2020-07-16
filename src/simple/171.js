var titleToNumber = function (s) {
    var ESymbol;
    (function (ESymbol) {
        ESymbol[ESymbol["A"] = 1] = "A";
        ESymbol[ESymbol["B"] = 2] = "B";
        ESymbol[ESymbol["C"] = 3] = "C";
        ESymbol[ESymbol["D"] = 4] = "D";
        ESymbol[ESymbol["E"] = 5] = "E";
        ESymbol[ESymbol["F"] = 6] = "F";
        ESymbol[ESymbol["G"] = 7] = "G";
        ESymbol[ESymbol["H"] = 8] = "H";
        ESymbol[ESymbol["I"] = 9] = "I";
        ESymbol[ESymbol["J"] = 10] = "J";
        ESymbol[ESymbol["K"] = 11] = "K";
        ESymbol[ESymbol["L"] = 12] = "L";
        ESymbol[ESymbol["M"] = 13] = "M";
        ESymbol[ESymbol["N"] = 14] = "N";
        ESymbol[ESymbol["O"] = 15] = "O";
        ESymbol[ESymbol["P"] = 16] = "P";
        ESymbol[ESymbol["Q"] = 17] = "Q";
        ESymbol[ESymbol["R"] = 18] = "R";
        ESymbol[ESymbol["S"] = 19] = "S";
        ESymbol[ESymbol["T"] = 20] = "T";
        ESymbol[ESymbol["U"] = 21] = "U";
        ESymbol[ESymbol["V"] = 22] = "V";
        ESymbol[ESymbol["W"] = 23] = "W";
        ESymbol[ESymbol["X"] = 24] = "X";
        ESymbol[ESymbol["Y"] = 25] = "Y";
        ESymbol[ESymbol["Z"] = 26] = "Z";
    })(ESymbol || (ESymbol = {}));
    var res = 0;
    var len = s.length;
    if (len == 1)
        return ESymbol["" + s];
    else {
        for (var i = 1; i <= len; i++) {
            var temp = Math.pow(26, (len - i));
            temp = temp == 0 ? 1 : temp;
            res += ESymbol["" + s[i - 1]] * temp;
        }
    }
    return res;
};
var a = titleToNumber("AAA");
console.log(a);
//# sourceMappingURL=171.js.map