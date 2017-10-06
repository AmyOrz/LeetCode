var rx = require("rxjs");

//过滤observable发出的值，若当前发出的值与前一次值不一致，则发出该值
var stream = rx.Observable.of("a","b","c","d","d","c").zip(rx.Observable.interval(600),function (x,y) {
    return x;
});
var oper = stream.distinctUntilChanged();
oper.subscribe(function (val) {
    console.log(val)
})
