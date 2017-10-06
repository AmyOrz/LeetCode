var rx = require("rxjs");

//延迟observable对象，发出每个元素的时间点
var stream = rx.Observable.interval(300).take(5);
var oper = stream.delayWhen(function (x) {
    return rx.Observable.interval(1000*x).take(1)
});
oper.subscribe(function (val) {
    console.log(val)
})
