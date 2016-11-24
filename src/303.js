var NumArray = (function () {
    function NumArray(nums) {
        this.nums = nums;
        this.newArr = [];
        this.sum = 0;
        for (var i = 0; i < this.nums.length; i++) {
            this.sum += this.nums[i];
            this.newArr.push(this.sum);
        }
    }
    NumArray.prototype.sumRange = function (i, j) {
        return i == 0 ? this.newArr[j] : (this.newArr[j] - this.newArr[i - 1]);
    };
    return NumArray;
}());
var arr = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(arr.sumRange(0, 5));
//# sourceMappingURL=303.js.map