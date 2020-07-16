let thirdMax = (nums:number[]):number=>{
    if(nums.length == 0)return null;
    if(nums.length == 1)return nums[0];
    let removeRepeat:Object = {};
    for(let i = 0;i<nums.length;i++){
        removeRepeat[nums[i]] = 1;
    }
    nums = Object.keys(removeRepeat).map((item:any):any=>{
        return item|0;
    });
    if(nums.length == 1){
        return nums[0];
    }
    nums.sort(function (a,b) {
        return a-b;
    });
    if(nums.length >2){
        return nums[nums.length-3]
    }else{
        return nums[1];
    }
};
console.log(thirdMax([-1234346234,1,1]));