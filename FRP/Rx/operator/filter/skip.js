var rx = require("rxjs");

//跳过observable对象前n项，返回新的observable对象
var stream = rx.Observable.of("a","b","c","d").zip(rx.Observable.interval(600),function (x,y) {
    return x;
});
var oper = stream.skip(3);
oper.subscribe(function (val) {
    console.log(val)
})
