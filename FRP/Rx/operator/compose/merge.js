var rx = require("rxjs");

//把多个observable对象合并为一个observable对象，按照给定的时序发出对应值
var stream1 = rx.Observable.interval(300).take(6);
var stream2 = rx.Observable.interval(500).take(3);

var oper = stream1.merge(stream2);
oper.subscribe(function (val) {
    console.log(val)
})


//stream2:  ----0----1----2|
//stream1:  --0--1--2--3--4--5|
//          merge
//oper   :  --0-01--21-3--(24)--5|
