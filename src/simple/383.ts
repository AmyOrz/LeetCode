var canConstruct = function(ransomNote:string, magazine:string):boolean{
    let ransomArr:string[] = ransomNote.split("");
    let magazineArr:string[] = magazine.split("");
    for(let s of ransomArr){
        let index:number = magazineArr.indexOf(s);
        if(index == -1)return false;
        else magazineArr.splice(index,1);
    }
    return true;
};
let res = canConstruct("ab","aab");
console.log(res)