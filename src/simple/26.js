var removeDuplicates = function (deplicateArray) {
    if (deplicateArray.length == 0 || deplicateArray.length == 1)
        return 0;
    var diminishingIndex = deplicateArray.length - 1;
    while (diminishingIndex >= 0) {
        if (deplicateArray[diminishingIndex - 1] == deplicateArray[diminishingIndex]) {
            deplicateArray.splice(diminishingIndex, 1);
        }
        diminishingIndex--;
    }
    return deplicateArray.length;
};
removeDuplicates([1, 1, 3, 4, 3, 2, 2]);
//# sourceMappingURL=26.js.map