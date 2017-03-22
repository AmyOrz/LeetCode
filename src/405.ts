var toHex = function(num:number):string{
    if(num>=0){
        return num.toString(16);
    }else{
        return (num>>>0).toString(16);
    }
};

var a = toHex(-1);
console.log(a)