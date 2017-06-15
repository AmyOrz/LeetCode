var rx = require("rxjs");

//一个流根据一段时间间隔来过滤自己流中的值，获取到当前最近一次值
var stream1 = rx.Observable.interval(50);

var oper = stream1.sampleTime(1000);
oper.subscribe(function (val) {
    console.log(val)
})

//stream1:--0--1--2--3--4--5
//oper : sample(1000)
//res:    ------1------3------5