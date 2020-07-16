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

let findMaxConsecutiveOnes = (nums:number[]):number=>{
    let max:number = 0,maxIndex:number = 0;
    for(let item of nums) {
        max = Math.max(max, maxIndex = item == 0 ? 0 : ++maxIndex);
    }
    return max;
};
findMaxConsecutiveOnes([1,1,0,1,1,1]);
