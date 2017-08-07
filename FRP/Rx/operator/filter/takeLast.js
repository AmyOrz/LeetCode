var rx = require("rxjs");

//获取observable对象发出的前n项值，取完就结束
var stream = rx.Observable.from(["a","b","c","d"]).map(function (res) {
    return res+1213;
})
var oper = stream.takeLast(1);
oper.subscribe(function (val) {
    console.log(val)
})
