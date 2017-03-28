var searchInsert = function(nums:number[], target:number):number{
    let len = nums.length;

    if(nums.length == 0)return 0;
    if(target <= nums[0])return 0;
    if(target > nums[len-1])return len;

    for(let i = 0;i<len;i++){
        let temp = nums[i+1];
        if(temp >= target){
            return i+1;
        }

    }
};
var a = searchInsert([1,3,5,6],5);
var b = searchInsert([1,3,5,6],0);

console.log(a)
console.log(b)
