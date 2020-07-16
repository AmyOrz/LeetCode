let twoSum = (arrayOfNumber:number[],target:number):number[]=>{
    let NumberAddEqualTarget:number[] = [];
    for(let i = 0;i<arrayOfNumber.length;i++){
        for(let j = i;j<arrayOfNumber.length;j++) {
            if (_NumberAddEqualTargetAndNumberUnLike(i,j)) {
                NumberAddEqualTarget.push(i);
                NumberAddEqualTarget.push(j);
            }
        }
    }
    function _NumberAddEqualTargetAndNumberUnLike(i:number,j:number){
        return arrayOfNumber[i] + arrayOfNumber[j] == target && i != j
    }
    return NumberAddEqualTarget;
};
let array:number[] = [0,4,3,0];
twoSum(array,0);
