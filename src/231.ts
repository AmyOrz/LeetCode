var isPowerOfTwo = function(n:number):boolean{
    if(n<=0)return false;
    if(n == 1)return true;
    var res:number = n;

    while(res > 3){
        res = res /2;
    }

    if(res%2 == 0)return true;
    else return false;
};
var a = isPowerOfTwo(2);
console.log(a)