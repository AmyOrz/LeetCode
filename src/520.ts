let detectCapitalUse = (word:string):boolean=>{
    return word == word.toUpperCase()?
        true:word == word.toLowerCase()?
        true:word == (word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())?
        true:false;
};
let a = detectCapitalUse("DIJWEOFI");
console.log(a)
