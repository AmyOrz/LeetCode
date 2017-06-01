var curry = require("lodash").curry;
var compose = function (f,g) {
    return function (x) {
        return f(g(x));
    }
};

//非pointfree,因为提到了数据
var snakeCase = function (word) {
    return word.toUpperCase().replace(/\s+/g,"_")
}

//pointfree，永远不要提到你的数据
var upper = function (x) {
    return x.toUpperCase();
};
var replace = curry(function (reg,replcement,str) {
    return str.replace(reg,replcement);
});
var snakeCase2 = compose(replace(/\s+/g,"_"),upper);

console.log(snakeCase2("sjef efhwejkfhwfi ergiehrg"))

