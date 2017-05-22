var rx = require("rxjs");

//mapTo映射为固定值
var stream = rx.Observable.of("a","b","c","d").zip(rx.Observable.interval(600),function (x,y) {
    return x;
});
var oper = stream.mapTo(2);
oper.subscribe(function (val) {
    console.log(val)
})
