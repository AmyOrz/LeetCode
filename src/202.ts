var isHappy = function(n:number):boolean{
    if(n<0)return false;
    let x:number = n;
    let y:number = n;
    while(x > 1) {
        x = getPowNumber(x);
        if(x == 1)return true;

        y = getPowNumber(getPowNumber(y));
        if(y == 1)return true;

        if(x == y)return false;
    }
    return true;

    function getPowNumber(num:number):number{
        var res:number = 0;
        while(num>0) {
            var temp:number = num%10;
            res += Math.pow(temp,2);
            num = ~~(num / 10);
        }
        return res;
    }
};

var a = isHappy(1111111);
console.log(a)