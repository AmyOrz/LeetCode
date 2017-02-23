let findRelativeRanks = (nums:number[]):string[] =>{
    let scores:string[] = ["Gold Medal", "Silver Medal", "Bronze Medal"];
    let tempIndex:number[] = [];
    let tempVal:number[] = nums;
    let result:string[] = [];
    for(let i = 0,len=nums.length;i<len;i++){
        tempIndex.push(i);
    }
    for(let i = 0,len = nums.length;i<len;i++){
        let max:number = i;
        for(let j = i+1;j<len;j++){
            if(tempVal[j] > tempVal[max]) {
                max = j;
            }
        }
        if(i != max)
            exchange(i,max);
    }
    function exchange(i:number,max:number){
        let tIndex:number = tempIndex[i];
        let tVal:number = tempVal[i];

        tempIndex[i] = tempIndex[max];
        tempVal[i] = tempVal[max];

        tempIndex[max] = tIndex;
        tempVal[max] = tVal;
    }

    for(let i = 0,len = tempIndex.length;i<len;i++){
        switch (i){
            case 0:result[tempIndex[i]] = scores[i];break;
            case 1:result[tempIndex[i]] = scores[i];break;
            case 2:result[tempIndex[i]] = scores[i];break;
            default:result[tempIndex[i]] = i+1+"";break;
        }
    }
    console.log(result)
    return result;
};
findRelativeRanks([10,3,8,9,4]);