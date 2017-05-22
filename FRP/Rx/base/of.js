var rx = require("rxjs");

var stream = rx.Observable.of('fck','hehe');

stream.subscribe(function (value) {
    console.log(value)
})
