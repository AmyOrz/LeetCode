var rx = require("rxjs");
/**
 * 使用interval创建流。每个间隔输出一个递增的值
 */
var stream = rx.Observable.interval(1000);
var data = ['a','b','c'];

var unsub = stream.map(function (val) {
    return data[val];
}).subscribe(function (value) {
    console.log(value)
});

setTimeout(function () {
    unsub.unsubscribe();
},5000);
