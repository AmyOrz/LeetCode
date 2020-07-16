var isPowerOfFour = function (num) {
    if (num <= 0)
        return false;
    if ((num & (num - 1)) == 0 && (num & 0x55555555) != 0)
        return true;
    return false;
};
var a = isPowerOfFour(16);
var b = isPowerOfFour(4);
console.log(b);
//# sourceMappingURL=342.js.map