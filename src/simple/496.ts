let nextGreaterElement = (findNums:number[], nums:number[]):number[]=>{
    let result:number[] = [];
    for(let i of findNums){
        let temp:number = nums.indexOf(i);
        let isFind:boolean = false;
        while(temp <= nums.length){
            temp++;
            if(nums[temp] > i){
                result.push(nums[temp]);
                isFind = true;
                break;
            }
        }
        if(isFind == false){
            result.push(-1);
        }
    }
    console.log(result)
    return result;
};
nextGreaterElement([1,3,5,2,4],[6,5,4,3,2,1,7]);
