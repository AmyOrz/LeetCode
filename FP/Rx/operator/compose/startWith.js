var rx = require("rxjs");

//在开始发出observable数据之前发出以设置的参数值
var stream1 = rx.Observable.interval(1000);

var oper = stream1.startWith('fck');
oper.subscribe(function (val) {
    console.log(val)
})

