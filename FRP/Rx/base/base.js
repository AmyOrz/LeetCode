var rx = require("rxjs");
/**
 * 可使用rx.of,fromArray,fromPromise,fromEvent创建可观察序列对象
 * create 自定义可观察序列对象
 */
var stream1 = rx.Observable.of(12,2);
var stream2 = rx.Observable.of(16);

var stream3 = rx.Observable.concat(stream1,stream2).reduce(function (a,b) {
    return a+b
});
//内部创建了Observer
stream3.subscribe(function (val) {
    console.log(val)
});
stream3.map(function (val) {
    return val+123;
}).subscribe(function (val) {
    console.log(val)
})

var a1 = rx.Observable.create(function (obser) {
    // obser.next(112);

    // setTimeout(function () {
    //     obser.complete();
    //     obser.next("fff");
    // },1000)
});
a1.subscribe(function (val) {
    console.log(val)
})
