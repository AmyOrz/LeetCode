type paramOfNumber = {
    (arr:number[],target:number):void;
};
let leetCode:paramOfNumber = (arr,target)=>{
    let result:number[] = [];
    for(let i = 0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++) {
            if (arr[i] + arr[j] == target && i != j) {
                result.push(i);
                result.push(j);
            }
        }
    }
    console.log(result)
    return result;
};
let array:number[] = [0,4,3,0]
leetCode(array,0);
