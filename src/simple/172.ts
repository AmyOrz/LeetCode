var trailingZeroes = function(n:number):number{
    var r = 0;
    while (n > 0) {
        n /= 5;
        r += ~~n;
    }
    return r;
};
var a = trailingZeroes(4);
console.log(a)
