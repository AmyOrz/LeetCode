var mori = require("mori");
var fck = mori.vector(1,2,3,4,5);

//由于向量的持久性，它返回旧数据基础上的新数据结构，这里的add pop都是新的向量，原始fck是永远不变的
var add = mori.conj(fck,12);
var pop = mori.pop(fck);
console.log(add,pop)

var first = mori.first(fck);
var reset = mori.rest(fck);
console.log(first,reset)

var sub = mori.subvec(fck,2,4);    //slice
console.log(sub)
console.log(fck)

