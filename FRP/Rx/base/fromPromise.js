var rs = require("rsvp");
var rx = require("rxjs");

var p = rx.Observable.fromPromise(new rs.Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("what fck");
    },3000);
}));


p.map(function (a) {
    return a+1;
}).subscribe(function (a) {
    console.log(a)
});
