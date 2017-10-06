var rx = require("rxjs");

//根据每个输入observable对象的输出顺序，产生一个新的observable对象
var stream1 = rx.Observable.interval(300).take(6);
var stream2 = rx.Observable.interval(500).take(3);

var oper = stream1.zip(stream2,function (x,y) {
    return x+y;
});
oper.subscribe(function (val) {
    console.log(val)
})

//获取每个steam全3个数对应相加
//stream2:  ----0----1----2|
//stream1:  --0--1--2--3--4--5|
//          zip
//oper   :  ----0----2----4|
/**
 stream1 发出第一个值 0 ，此时 stream2 并未发出任何值，所以不会调用 project 函数
 stream2 发出第一个值 0 ，此时 stream1 之前发出的第一个值为 0，调用 project 函数，返回值为 0
 stream1 发出第二个值 1 ，此时 stream2 并未发出第二个值，所以不会调用 project 函数
 stream1 发出第三个值 2 ，此时 stream2 并未发出第三个值，所以不会调用 project 函数
 stream2 发出第二个值 1 ，此时 stream1 之前发出的第二个值为 1，调用 project 函数，返回值为 2
 stream1 发出第四个值 3 ，此时 stream2 并未发出第四个值，所以不会调用 project 函数
 stream2 发出第三个值 2 ，此时 stream1 之前发出的第三个值为 2，调用 project 函数，返回值为 4
 stream2 对象结束，example 对象也同时结束，因为 stream2 对象与 stream1 对象不会再有相同次序的值
 */