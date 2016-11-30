var isValid = function (symbolString) {
    _symbolIsValidByLen();
    var allSymbolArray = ["(", ")", "{", "}", "[", "]"];
    var symbolStack = [];
    for (var i = 0, len = symbolString.length; i < len; i++) {
        if (allSymbolArray.indexOf(symbolString[i]) % 2 == 0) {
            symbolStack.push(symbolString[i]);
        }
        else {
            var symbolInArrayLast = symbolStack.pop();
            if (allSymbolArray[allSymbolArray.indexOf(symbolInArrayLast) + 1] != symbolInArrayLast[i]) {
                return false;
            }
        }
    }
    if (symbolStack.length > 0)
        return false;
    return true;
    function _symbolIsValidByLen() {
        if (symbolString.length % 2 != 0)
            return false;
    }
};
console.log(isValid("(("));
//# sourceMappingURL=20.js.map