let rob = (nums:number[])=>{
    if(nums.length === 0)return 0;
    let n:number = nums.length;
    let result:number[] = [nums[0],Math.max(nums[0],nums[1])];
    for(let i = 2;i<n;i++){
        result.push(Math.max(result[i-2]+nums[i],result[i-1]));
    }
    console.log(result[n-1]);
    return result[n-1];
};
rob([1,21,436,4567,568,78978,2]);

