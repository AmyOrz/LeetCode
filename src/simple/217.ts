let containsDuplicate = (nums:number[]):boolean=>{
    if(nums.length <= 0){
        return false;
    }
    let result:Object = {};
    for(let item of nums){
        result[item] = result[item] == void 0?1:++result[item];
    }
    for(let item in result){
        if(result[item] >= 2){
            return false;
        }
    }
    return true;
};
let arr:number[] = [1,2,3,1];
console.log(containsDuplicate(arr))
