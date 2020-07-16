var removeElement = (arrayOfNumber:number[], expectEqualNumber:number):number=>{
    for(let i = arrayOfNumber.length-1;i>=0;i--){
        if(arrayOfNumber[i] == expectEqualNumber){
            arrayOfNumber.splice(i,1);
        }
    }
    return arrayOfNumber.length;
};
console.log(removeElement([3,2,2,3],3));