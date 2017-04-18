var isPerfectSquare = function (num) {
    if (num <= 0)
        return false;
    var square = Math.sqrt(num);
    if (square == ~~square)
        return true;
    else
        return false;
};
console.log(isPerfectSquare(16), true);
console.log(isPerfectSquare(14), false);
//# sourceMappingURL=367.js.map