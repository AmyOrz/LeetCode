var rx = require("rxjs");

//缓冲源Observable对象已发出的值，直到closingNotifier触发，才统一输出缓存的元素
//这里oper缓存了stream1发出的值，当stream2发出值时，返回stream1中缓存的值
var stream1 = rx.Observable.interval(300);
var stream2 = rx.Observable.interval(2000);
var oper = stream1.buffer(stream2);

oper.subscribe(function (val) {
    console.log(val)
})
