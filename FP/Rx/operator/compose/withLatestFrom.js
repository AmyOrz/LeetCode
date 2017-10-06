var rx = require("rxjs");

//当源 Observable 发出新值的时候，根据 project 函数，合并 other Observable 对象此前发出的最新值。
var stream1 = rx.Observable.from("hello").zip(rx.Observable.interval(500),function (x,y) {
    return x;
});
var stream2 = rx.Observable.from("010001").zip(rx.Observable.interval(300),function (x,y) {
    return x;
});

var oper = stream1.withLatestFrom(stream2,function (x,y) {
    return y === "1"?x.toUpperCase():x;
});
oper.subscribe(function (val) {
    console.log(val)
})

//获取每个steam全3个数对应相加
//stream2: ----h----e----l----l----o|
//stream1: --0--1--0--0--0--1|
//         withLatestFrom
//oper   : ---h----e----l----L----O|
/**
 main 发出 h ，此时 some 上一次发出的值为 0，调用 project 函数，返回值为 h
 main 发出 e ，此时 some 上一次发出的值为 0，调用 project 函数，返回值为 e
 main 发出 l ，此时 some 上一次发出的值为 0，调用 project 函数，返回值为 l
 main 发出 l，此时 some 上一次发出的值为 1，调用 project 函数，返回值为 L
 main 发出 o，此时 some 上一次发出的值为 1，调用 project 函数，返回值为 O

 */