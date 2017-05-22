var rx = require("rxjs");

//缓冲源Observable对象已发出的值，直到closingNotifier触发，才统一输出缓存的元素
var stream1 = rx.Observable.interval(300);
var stream2 = rx.Observable.interval(2000);
var oper = stream1.buffer(stream2);

oper.subscribe(function (val) {
    console.log(val)
})
