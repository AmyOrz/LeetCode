let longestCommonPrefix = (strs:string[]):string=>{
    if(strs.length == 0 || strs[0] == "")return "";
    strs.sort();
    let first:string = strs[0];
    let last:string = strs[strs.length-1];
    let result:string[] = [];
    for(let i = 0;i<first.length;i++){
        if(last.length > i && first[i] == last[i]){
            result.push(first[i]);
        }else{
            return result.join("");
        }
    }
    return result.join("");
};
console.log(longestCommonPrefix(["c","acc","ccc"]));
