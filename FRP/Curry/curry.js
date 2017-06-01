var curry = require("lodash").curry;

//<<---  match start ---->
var match = curry(function (reg,str) {
   return str.match(reg);
});

var hasSpace = match(/\s+/g);
//hasSpace = (x)=>x.match(/\s+/g)

var res = hasSpace("asfj  ewfjwef wef wef");
console.log(res);

//<<---  match over ---->

//<<---  filter start ---->
var filter = curry(function (func,arr) {
   return  arr.filter(func);
});

var findSpace = filter(hasSpace);
//findSpace = (arr)=>arr.filter((x)=>x.match(/\s+/g))

var res2 = findSpace(["sdf ef ef","ewff wwee rrr","wrgergrtg"]);
console.log(res2)

//<<---  filter over ---->

//<<---  replace start ---->
var replace = curry(function (reg,replcement,str) {
   return str.replace(reg,replcement);
});

var noYuanyin = replace(/[aeiou]/ig);
//noYuanyin = (repalcement,str)=>str.replace(/[aeiou]ig/,replacement)

var censored = noYuanyin("_");
//censored = (str)=>str.repalce(/aeiou/ig,"_")

var res3 = censored("that is my sister")
console.log(res3)

//<<---  replace over ---->
