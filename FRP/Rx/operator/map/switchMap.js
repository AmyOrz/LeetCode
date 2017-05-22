var rx = require("rxjs");

//对每个observable对象发出的值进行映射处理，并进行合并
//有新的observable对象出现，会在新的observable对象发出新值后，退订前一个未完成的observable对象
var stream = rx.Observable.from([1,2,3,4]);

var oper = stream.switchMap(function (val) {
    return rx.Observable.interval(100).take(val);
});
oper.subscribe(function (val) {
    console.log(val)
})
