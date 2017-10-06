var rx = require("rxjs");

var stream = rx.Observable.of("a","b","c","d").zip(rx.Observable.interval(600),function (x,y) {
    return x;
});
var repeat = stream.repeat(2);
repeat.subscribe(function (val) {
    console.log(val)
})
