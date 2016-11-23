let findDisappearedNumbers = (nums:number[]):number[]=>{
    if(nums.length == 0 || nums.length == 1)return nums;

    let min:number = nums[0];
    let max:number = nums[0];
    for(let item of nums){
        if(item<min) min = item;
        if(item>max) max = item;
    }
    for(let i = min;i<= max;i++){
        if(nums.indexOf(i)>= 0) {
            while(nums.indexOf(i) >= 0) {
                nums.splice(nums.indexOf(i), 1);
            }
        }else{
            nums.push(i);
        }
    }
    return nums;
};
findDisappearedNumbers([1,2,3,5,7,9,3,5,2,6]);