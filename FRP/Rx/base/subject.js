var rx = require("rxjs");

var subject = new rx.Subject();
var source = rx.Observable.interval(300).map(function (val) {
    return "what fck "+val
}).take(5);

source.subscribe(subject);

subject.subscribe(function (val) {
    console.log("next : "+val)
});

subject.next("hehe");
subject.next("hefan");

