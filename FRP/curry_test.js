var curry = require("lodash").curry;

var split = curry(function(symbol,str){
    return str.split(symbol);
});

var filter = curry(function (func,arr) {
    return arr.filter(func);
});

var map = curry(function (func,arr) {
    return arr.map(func)
});
var words = split(" ");

var sentence = map(words);

var a = sentence(["hi man","what fck"]);
console.log(a)