let longestCommonPrefix = (strs:string[]):string=>{
    if(strs.length == 0)return "";
    let result:any = {};
    let max:number = 0;
    let maxIndex:string = "0";
    for(let i = 0;i<strs.length;i++){
        result[i] = strs[i].length;
    }
    for(let item in result){
        if(result[item]>max){
            max = result[item];
            maxIndex = item;
        }
    }
    return strs[Number(maxIndex)];
};
console.log(longestCommonPrefix(["asd","asdergerg","rthjujyujuy","vtg"]));