var rx = require("rxjs");

//缓冲源Observable对象已发出的值
var stream1 = rx.Observable.interval(300);
var oper = stream1.bufferTime(1000);

oper.subscribe(function (val) {
    console.log(val)
})
