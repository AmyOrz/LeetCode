let longestCommonPrefix = (arrayOfString:string[]):string=>{
    if(arrayOfString.length == 0 || arrayOfString[0] == "")return "";
    arrayOfString.sort();

    let firstStringInArray:string = arrayOfString[0];
    let lastStringInArray:string = arrayOfString[arrayOfString.length-1];

    let arrayOfCommonPrefix:string[] = [];
    for(let i = 0;i<firstStringInArray.length;i++){
        if(_lastArrayLenThanTraverseAndFirstEqualLast(i)){
            arrayOfCommonPrefix.push(firstStringInArray[i]);
        }else{
            return arrayOfCommonPrefix.join("");
        }
    }
    function _lastArrayLenThanTraverseAndFirstEqualLast(traverse:number){
        return lastStringInArray.length > traverse && firstStringInArray[traverse] == lastStringInArray[traverse];
    }
    return arrayOfCommonPrefix.join("");
};
console.log(longestCommonPrefix(["c","ccc","ccc"]));
