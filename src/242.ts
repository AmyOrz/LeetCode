let isAnagram = (s:string, t:string):boolean=>{
    if(s.length != t.length){
        return false;
    }
    let result:any = {};
    for(let i = 0;i<s.length;i++){
        result[s[i]] = result[s[i]] == void 0?0:++result[s[i]];
    }
    for(let i = 0;i<t.length;i++){
        result[t[i]] = result[t[i]] == void 0?null:--result[t[i]];
    }
    for(let item in result){
        if(result[item] != 0){
            return false;
        }
    }
    return true;
};
let s:string = "aacc";
let t:string = "ccac";
console.log(isAnagram(s,t));