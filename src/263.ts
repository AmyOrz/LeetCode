var isUgly = function(num:number):boolean{
    if(num <= 0)return false;
    if(num == 1)return true;
    for(var i of [2,3,5]){
        while(num && num % i == 0)
            num /= i;
    }
    return num == 1;
};
isUgly(6)
