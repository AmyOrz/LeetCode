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


var a = [1,2,3,4];
var b = a.reduce(function(x,y){
    return x + y;
})

console.log(b)
