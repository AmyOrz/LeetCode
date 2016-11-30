var removeElement = function (arrayOfNumber, expectEqualNumber) {
    for (var i = arrayOfNumber.length - 1; i >= 0; i--) {
        if (arrayOfNumber[i] == expectEqualNumber) {
            arrayOfNumber.splice(i, 1);
        }
    }
    return arrayOfNumber.length;
};
console.log(removeElement([3, 2, 2, 3], 3));
//# sourceMappingURL=27.js.map