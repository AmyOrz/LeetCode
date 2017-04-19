var plusOne = function(digits:number[]) :number[]{
    var c = 1;
    for(var i = digits.length-1;i>=0;i--){
        var res = digits[i] + c;
        if(res < 10){
            digits[i] = res;

            return digits;
        }else{
            digits[i] = 0;
            c = 1;
        }
    }

    if(c == 1 && digits[0] == 0){
        var newArr = [];
        for(var j = 1;j<=digits.length;j++){
            newArr[j] = digits[j-1];
        }
        newArr[0] = c;
        return newArr;
    }
    return digits;
};
var a = plusOne([9]);
console.log(a,[1,0])