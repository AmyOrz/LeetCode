var reverseVowels = function (s) {
    if (s == void 0)
        return s;
    var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    var start = 0;
    var end = s.length - 1;
    var sArr = s.split("");
    while (start < end) {
        while (start < end && vowels.indexOf(s[start]) == -1) {
            start++;
        }
        while (start < end && vowels.indexOf(s[end]) == -1) {
            end--;
        }
        var temp = sArr[start];
        sArr[start] = sArr[end];
        sArr[end] = temp;
        start++;
        end--;
    }
    return sArr.join("");
};
var as = reverseVowels("A man, a plan, a canal: Panama");
console.log(as);
var a = reverseVowels(",.");
console.log(a);
//# sourceMappingURL=345.js.map