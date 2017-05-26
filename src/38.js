var countAndSay = function (n) {
    if (n == 1)
        return '1';
    var str = countAndSay(n - 1) + "*";
    var strArr = str.split("");
    var count = 1;
    var res = '';
    for (var i = 0; i < strArr.length - 1; i++) {
        if (strArr[i] == strArr[i + 1]) {
            count++;
        }
        else {
            res = res + count + strArr[i];
            count = 1;
        }
    }
    return res;
};
var a = countAndSay(4);
console.log(a);
//# sourceMappingURL=38.js.map