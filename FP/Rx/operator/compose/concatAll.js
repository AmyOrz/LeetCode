var rx = require("rxjs");

//把多个observable对象合并为一个observable对象，并在上一个observable完成后才订阅下一个
var obs1 = rx.Observable.interval(1000).take(2);
var obs2 = rx.Observable.interval(500).take(5);
var obs3 = rx.Observable.interval(2000).take(1);

var source = rx.Observable.of(obs1, obs2, obs3);

var example = source.concatAll();
example.subscribe(function (val) {
    console.log(val)
})

