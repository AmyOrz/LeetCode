var rx = require("rxjs");
/**
 * 使用timer创建的流。第一个参数为开始等待的时间，第二个参数为其他间隔时间
 */
var stream = rx.Observable.timer(1000,3000);

stream.subscribe(function (value) {
    console.log(value)
})
