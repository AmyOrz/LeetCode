var detectCapitalUse = function (word) {
    return word == word.toUpperCase() ?
        true : word == word.toLowerCase() ?
        true : word == (word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()) ?
        true : false;
};
var a = detectCapitalUse("DIJWEOFI");
console.log(a);
//# sourceMappingURL=520.js.map