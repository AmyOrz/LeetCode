var climbStairs = function(n:number):number{
    var a = 1;
    var b = 1;
    while (n--)
        a = (b += a) - a;
    return a;
};