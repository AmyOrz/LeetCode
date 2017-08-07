var rx = require("rxjs");

//获取observable对象发出的第一项，取完就结束
var stream = rx.Observable.from(["a","b","c","d"]).zip(rx.Observable.interval(600),function (x,y) {
    return x;
});
var oper = stream.last();
oper.subscribe(function (val) {
    console.log(val)
})
