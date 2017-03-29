var curry = require("lodash").curry;

var match = curry(function (exp,str) {
    return str.match(exp);
});

var replace = curry(function (exp,replaceMent,str) {
    return str.replace(exp,replaceMent);
});

var filter = curry(function (func,arr) {
    return arr.filter(func);
});

var map = curry(function (func,arr) {
    return arr.map(func)
});

var hasIng = match(/\w+(?=ing)/ig);

var findIng = filter(hasIng);

var a = findIng(["asdIng","asdwf","fcking"]);
console.log(a)

var noVowels = replace(/[aeiou]/ig);
var sensored = noVowels("~");
var mapOper = map(sensored);
var b = mapOper(findIng(["arche","fucking","heheIng"]));
console.log(b)