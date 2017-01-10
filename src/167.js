var twoSum = function (numbers, target) {
    if (numbers.length <= 1)
        return [];
    var result = [];
    var left = 0, right = numbers.length - 1;
    while (left <= right) {
        var sum = numbers[left] + numbers[right];
        if (sum == target) {
            result.push(left + 1);
            result.push(right + 1);
            break;
        }
        else if (sum > target) {
            right--;
        }
        else {
            left++;
        }
    }
    return result;
};
console.log(twoSum([0, 0, 11, 15], 15));
//# sourceMappingURL=167.js.map