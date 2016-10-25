//Move Zeroes
type moveType = {
    (nums:number[]):number[];
}
let moveZeroes:moveType = (nums)=>{
    let result:number[] = [];
    nums = nums.sort((a,b)=> b-a);
    for(let item of nums){
        if(item == 0){
            result.push(0);
        }else{
            result.unshift(item);
        }
    }
    return result;
};
let arr:number[] = [0,2,546,7,2,34,0];
console.log(moveZeroes(arr));
