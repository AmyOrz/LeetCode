let findComplement = (num:number):number=>{
    let mask:number = 1;
    let temp:number = num;
    while(temp > 0){
        mask = mask << 1;
        temp = temp >> 1;
    }
    return num ^ (mask-1);
};
let a = findComplement(2);
console.log(a);
