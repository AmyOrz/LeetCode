var mori = require("mori");
//hashMap
var map1 = mori.hashMap("a",1,"b",2);
console.log(map1);

var m1Add = mori.assoc(map1,"a",123);
console.log(m1Add)

//map,filter,reduce
var v1 = mori.vector(1,2,3,4,5);
var v1Map = mori.map(function () {
    return 11;
},v1);
console.log(v1Map)

var v1Filter = mori.filter(mori.isOdd,v1);
console.log(v1Filter)

var v1Reduce = mori.reduce(function(a,b){
    return a+b;
},0,v1);
console.log(v1Reduce)

//take,takeWhile,drop,dropWhile
var range = mori.range();   //这是一个无限整数序列
var rang10 = mori.take(10,range);  //获取range前10个整数序列
var rang20 = mori.take(20,range);
console.log(rang10,rang20)

var drop10 = mori.drop(10,range);  //与take互补，获取除前10以外的无限序列







