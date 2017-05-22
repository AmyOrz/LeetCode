var rx = require("rxjs");

//from(["h","e","l","l",""o])    from处理整体
//of("h","e","l","l",""o)  of处理单个
var stream = rx.Observable.from("hello").zip(rx.Observable.interval(600),function (x,y) {
    console.log(x,y)
    return x;
});
stream.subscribe(function (val) {
    console.log(val)
})
