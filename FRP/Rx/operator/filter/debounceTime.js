var rx = require("rxjs");

//在设定时间跨度内，若是observable对象没有再发出新值，则返回最近一次发出的值
var stream = rx.Observable.interval(300).take(3);
var oper = stream.map(function(val){ return val+1;}).debounceTime(400);
oper.subscribe(function (val) {
    console.log(val)
})
