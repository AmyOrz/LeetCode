//my solution
/*let findMaxConsecutiveOnes = (nums:number[]):number=>{
    let result:number[] = [];
    let sum:number = 0;
    for(let i = 0;i<nums.length;i++){
        let temp:number = nums[i];
        if(temp == 1){
            sum++;
        }else{
            result.push(sum);
            sum = 0;
        }
    }
    result.push(sum);
    result.sort(function (a,b) {
        return b-a;
    });
    return result[0];
};*/
var findMaxConsecutiveOnes = function (nums) {
    var max = 0, maxIndex = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var item = nums_1[_i];
        max = Math.max(max, maxIndex = item == 0 ? 0 : ++maxIndex);
    }
    return max;
};
findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
//# sourceMappingURL=485.js.map