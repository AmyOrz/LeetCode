var curry = require("lodash").curry;
var compose = function (f,g,m,n) {
    return function (x) {
        return f(g(m(n(x))));
    }
};

//我们可以使用非纯函数来追踪代码状态
var trace = curry(function (tag,x) {
    console.log(tag," ----> ",x)
    return x;
});

var join = curry(function (replacement,arr) {
    return arr.join(replacement);
});

var split = curry(function (repalcement,str) {
    return str.split(repalcement);
});

var replace = curry(function (reg,repalcement,str) {
    return str.replace(reg,repalcement)
});

var upper = function (x) {
    return x.toUpperCase();
}

var map = curry(function (func,arr) {
    return arr.map(func)
})

var dasherize = compose(join("__"),map(upper), split('_'), replace(/\s+/ig, '_'));
console.log(dasherize("sejkhf  efh  greg  gerg"));  //这里报错了

