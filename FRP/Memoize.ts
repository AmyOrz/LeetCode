let memoize = (func)=>{
    var cache = {};
    return ()=>{
        var arg = JSON.stringify(arguments);
        cache[arg] = cache[arg] || func.apply(func,arguments);
        console.log(cache)
        return cache[arg];
    }
};

let test = memoize((x,y)=>x*x);

var a = test(2);
var b = test(6);
