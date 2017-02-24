var canConstruct = function (ransomNote, magazine) {
    var ransomArr = ransomNote.split("");
    var magazineArr = magazine.split("");
    for (var _i = 0, ransomArr_1 = ransomArr; _i < ransomArr_1.length; _i++) {
        var s = ransomArr_1[_i];
        var index = magazineArr.indexOf(s);
        if (index == -1)
            return false;
        else
            magazineArr.splice(index, 1);
    }
    return true;
};
var res = canConstruct("ab", "aab");
console.log(res);
//# sourceMappingURL=383.js.map