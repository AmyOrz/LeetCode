var rx = require("rxjs");

//从源observable对象发出第一个值开始，忽略等待时间内发出的值，等待时间过后再发出新值。
//该方法一开始就会发出值，在等待时间内不会发出任何值，等待时间过后又会发出新的值
var stream = rx.Observable.interval(300).take(5);
var oper = stream.map(function(val){
    return val+1;
}).throttleTime(800);
oper.subscribe(function (val) {
    console.log(val)
})
