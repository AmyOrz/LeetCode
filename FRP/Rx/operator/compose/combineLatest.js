var rx = require("rxjs");

//用于合并输入的observable对象，当源observable对象和other observable对象都发出值后，才会调用project函数
var stream1 = rx.Observable.interval(300).take(6);
var stream2 = rx.Observable.interval(500).take(3);

var oper = stream1.combineLatest(stream2,function (x,y) {
    return x+y;
});
oper.subscribe(function (val) {
    console.log(val)
})


//stream2:  ----0----1----2|
//stream1:  --0--1--2--3--4--5|
//          combineLatest
//oper   :  ----01--23-4--(56)--7|
/**
 stream1 发出 0 ，但此时 stream2 并未发出任何值，所以不会调用 project 函数
 stream2 发出 0 ，此时 stream1 最后一次发出的值为 0 ，调用 project 函数，返回值为 0
 stream1 发出 1 ，此时 stream2 最后一次发出的值为 0，调用 project 函数，返回值为 1
 stream1 发出 2 ，此时 stream2 最后一次发出的值为 0，调用 project 函数，返回值为 2
 stream2 发出 1 ，此时 stream1 最后一次发出的值为 2 ，调用 project 函数，返回值为 3
 stream1 发出 3 ，此时 stream2 最后一次发出的值为 1，调用 project 函数，返回值为 4
 stream2 发出 2 ，此时 stream1 最后一次发出的值为 3 ，调用 project 函数，返回值为 5
 stream1 发出 4 ，此时 stream2 最后一次发出的值为 2，调用 project 函数，返回值为 6
 stream1 发出 5 ，此时 stream2 最后一次发出的值为 2，调用 project 函数，返回值为 7
 stream1 和 stream2 都结束了，所以 example 也结束了。
 */
