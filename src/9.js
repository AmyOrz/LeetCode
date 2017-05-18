var isPalindrome = function (x) {
    var res = 0, temp = x;
    while (temp > 0) {
        temp %= 10;
        res = res * 10 + temp;
    }
    console.log(res);
};
console.log(isPalindrome(1234));
//# sourceMappingURL=9.js.map