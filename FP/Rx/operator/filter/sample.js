var rx = require("rxjs");

//一个流根据宁外一个流来过滤自己流中的值
var stream1 = rx.Observable.interval(50);

var stream2 = rx.Observable.interval(1000);

var oper = stream1.sample(stream2);
oper.subscribe(function (val) {
    console.log(val)
})

//stream1:--0--1--2--3--4--5
//stream2:------0------1------2
//oper : sample
//res:    ------1------3------5