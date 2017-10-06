var rx = require("rxjs");

//过滤observable发出的值，确保没有重复出现
var stream = rx.Observable.of("a","b","c","d","a","c").zip(rx.Observable.interval(600),function (x,y) {
    return x;
});
var oper = stream.distinct();
oper.subscribe(function (val) {
    console.log(val)
})
