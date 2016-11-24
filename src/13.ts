var romanToInt = (s:string):number=>{
    let hash:Object = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let lastChar:number = hash[s[0]];
    let result:number = 0;
    for(let i = 0;i<s.length;i++){
        let current:string = hash[s[i]];
        if(lastChar < current){
            result = result - (lastChar * 2) + current;
        }else{
            lastChar = current;
        }
    }
    return result;
};

