var missingNumber = function(nums:number[]):number{
    if(nums.length == 1){
        if(nums[0] == 0)return 1;
        else return 0;
    }
    let start:number = -1;
    nums.sort((a,b)=>a-b);
    for(let i = 0;i<nums.length;i++){
        if((nums[i]-start) > 1)return start+1;
        start++;
    }
    return start+1;
};
console.log(missingNumber([1,0]));