var majorityElement = function(nums:number[]):number{
    if(nums.length == 0)return 0;
    if(nums.length == 1)return nums[0];
    let resObj:Object = {};
    let max:number = 0;
    let maxEle:number = 0;
    for(let val of nums){
        if(resObj[val] == null)resObj[val] = 1;
        else resObj[val]++;
    }
    for(let val in resObj){
        if(resObj[val] > max){
            max = resObj[val];
            maxEle = ~~val;
        }
    }
    console.log(max)
    console.log(nums.length)

    if(max > nums.length/2)return maxEle;
    else return 0;
};
// var a = majorityElement([4,2,4,4,7,7,4,6,57,4,4,4,5,4,4]);
var a = majorityElement([2,2]);
console.log(a)
