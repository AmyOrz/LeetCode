var arrangeCoins = function(n:number):number{
    if(n <= 0)return 0;

    var res:number = 0;

    while(n >= 0){
        res++;
        var temp = res;
        while(temp >= 0){
            n--;
            temp--;
            if(n <= 0){
                if(temp > 0)
                    return res-1;
                else
                    return res;
            }
        }
    }
};
console.log(arrangeCoins(8))
console.log(arrangeCoins(5))
