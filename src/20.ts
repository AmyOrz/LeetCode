var isValid = (s:string):boolean=>{
    if(s.length%2 != 0)return false;
    let enterSymbol:string[] = ["(",")","{","}","[","]"];
    let interval = s.length/2;
    let result:string[] = [];
    for(let i = 0,len = s.length;i<len;i++){
        if(enterSymbol.indexOf(s[i])%2 == 0){
            result.push(s[i]);
        }else{
            let symbol:string = result.pop();
            if(enterSymbol[enterSymbol.indexOf(symbol)+1] != s[i]){
                return false;
            }
        }
    }
    if(result.length >0)return false;
    return true;
};
console.log(isValid("(("));