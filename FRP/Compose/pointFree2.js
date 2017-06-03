var curry = require("lodash").curry;
var compose = require("ramda").compose;

var upper = function (x) {
    return x.toUpperCase();
};

var head = function (x) {
    return x[0];
}
//非pointfree,因为提到了数据
var init = function (name) {
    return name.split(" ").map(compose(upper,head)).join(",");
}

console.log(init("what fck is hehe"))

//pointfree
var map = curry(function (func,arr) {
    return arr.map(func)
});
var join = curry(function (replacement,arr) {
    return arr.join(replacement)
});
var split = curry(function (repalcement,str) {
    return str.split(repalcement)
})

var init2 = compose(join(","),map(compose(upper,head)),split(" "));
console.log(init2("what fck is arvin"))


