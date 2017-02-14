let findComplement = (num:number):number=>{
    let binary:string = num.toString(2);
    let result:string = "";
    for(let i = 0;i<binary.length;i++){
        if(binary[i] == "0")result += "1";
        else if(binary[i] == "1")result += "0";
    }
    return parseInt(result,2);
};
let a = findComplement(2);
console.log(a)
