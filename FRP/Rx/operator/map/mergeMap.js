var rx = require("rxjs");

//对每个observable对象发出的值进行映射处理，并进行合并
//有新的observable对象出现，会在新的observable对象发出新值后，退订前一个未完成的observable对象
var stream = rx.Observable.interval(1000).take(3);

var oper = stream.mergeMap(function (val) {
    return rx.Observable.interval(500).take(3).map(function (x) {
        return val + ":" + x;
    });
});
oper.subscribe(function (val) {
    console.log(val)
})

//stream  : -0----1-
//oper       ->0--1--2--3--4-
//                 ->0--1--2--3--4-
//output  : ----x--x--x--x--x--x--x