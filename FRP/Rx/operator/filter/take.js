var rx = require("rxjs");

//获取observable对象发出的前n项值，取完就结束
var stream = rx.Observable.of("a","b","c","d").zip(rx.Observable.interval(600),function (x,y) {
    return x;
});
var oper = stream.take(3);
oper.subscribe(function (val) {
    console.log(val)
})
