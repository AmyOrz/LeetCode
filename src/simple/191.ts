var hammingWeight = (n:number)=>{
    let binaryStr:string = n.toString(2);
    let result:number = 0;
    if(binaryStr.length > 32)return;
    for(let i = 0;i<binaryStr.length;i++){
        if(Number(binaryStr[i]) == 1){
            result++;
        }
    }
    return result;
};
hammingWeight(11);
