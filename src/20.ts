var isValid = (symbolString:string):boolean=>{
    _symbolIsValidByLen();

    let allSymbolArray:string[] = ["(",")","{","}","[","]"];
    let symbolStack:string[] = [];
    for(let i = 0,len = symbolString.length;i<len;i++){
        if(allSymbolArray.indexOf(symbolString[i])%2 == 0){
            symbolStack.push(symbolString[i]);
        }else{
            let symbolInArrayLast:string = symbolStack.pop();
            if(allSymbolArray[allSymbolArray.indexOf(symbolInArrayLast)+1] != symbolInArrayLast[i]){
                return false;
            }
        }
    }
    if(symbolStack.length >0)return false;
    return true;

    function _symbolIsValidByLen(){
        if(symbolString.length%2 != 0)return false;
    }
};
console.log(isValid("(("));