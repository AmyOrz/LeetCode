var memoize = function (func) {
    var cache = {};
    return function () {
        var arg = JSON.stringify(arguments);
        cache[arg] = cache[arg] || func.apply(func, arguments);
        console.log(cache);
        return cache[arg];
    };
};
var test = memoize(function (x, y) { return x * x; });
var a = test(2);
var b = test(6);
//# sourceMappingURL=Memoize.js.map