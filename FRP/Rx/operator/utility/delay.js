var rx = require("rxjs");

//延迟observable对象，发出一个元素的时间点
var stream = rx.Observable.interval(300).take(5);
var oper = stream.delay(800);
oper.subscribe(function (val) {
    console.log(val)
})
