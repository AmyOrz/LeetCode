var rx = require("rxjs");

//scan可认为是rx的reduce
var stream = rx.Observable.of("a","b","c","d").zip(rx.Observable.interval(600),function (x,y) {
    return x;
});
var oper = stream.scan(function (current,next) {
    return current+next;
},"X");
oper.subscribe(function (val) {
    console.log(val)
})
