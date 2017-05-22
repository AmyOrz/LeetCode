var rx = require("rxjs");

//缓冲源Observable对象已发出的值,达到指定数值时结束
var stream1 = rx.Observable.interval(300);
var oper = stream1.bufferCount(4);

oper.subscribe(function (val) {
    console.log(val)
})
