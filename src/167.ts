let twoSum = (numbers:number[], target:number):number[]=>{
    if(numbers.length <= 1)return [];
    let result:number[] = [];
    let left:number = 0,
        right:number = numbers.length-1;
    while(left <= right){
        let sum:number = numbers[left]+numbers[right];
        if(sum == target){
            result.push(left+1);
            result.push(right+1);
            break;
        }else if(sum > target){
            right--;
        }else{
            left++;
        }
    }
    return result;
};
console.log(twoSum([0,0,11,15],15));

