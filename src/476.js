var findComplement = function (num) {
    var mask = 1;
    var temp = num;
    while (temp > 0) {
        mask = mask << 1;
        temp = temp >> 1;
    }
    return num ^ (mask - 1);
};
var a = findComplement(2);
console.log(a);
//# sourceMappingURL=476.js.map