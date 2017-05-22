var rx = require("rxjs");

//对每个observable对象发出的值进行映射处理，并进行合并
//先处理前一个observable，在处理下一个observable对象
var stream = rx.Observable.from([1,2,3]);

var oper = stream.concatMap(function (val) {
    val += 1;
    return rx.Observable.interval(300).take(val);
});
oper.subscribe(function (val) {
    console.log(val)
})
