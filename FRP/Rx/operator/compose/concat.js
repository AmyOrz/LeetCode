var rx = require("rxjs");

//把多个observable对象合并为一个observable对象，observable对象会依次执行，需要等前一个observable对象完成后，才会继续订阅下一个
var stream1 = rx.Observable.interval(1000).take(3);
var stream2 = rx.Observable.of(4,5,5,4).distinct();
var stream3 = rx.Observable.of(9,4,1,2);

var oper = stream1.concat(stream2,stream3);
oper.subscribe(function (val) {
    console.log(val)
})


//stream1:  ---0---1---2|
//stream2:  (45)|
//stream3:  (9412)|
//           concat
//oper   :  ---0---1---2(459412)|
