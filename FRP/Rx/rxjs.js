var rs = require("rsvp");
var rx = require("rxjs");

var source = rx.Observable.create(function (observer) {
    observer.next("fck1");
    setTimeout(function () {
        observer.next("fck2");
    },1000)
});
source.map(function (val) {
    return val+"hehe";
}).subscribe(function (val) {
    console.log(val)
})

/*
var p = rx.Observable.fromPromise(new rs.Promise(function(resolve,reject){
    wdFrp.AjaxUtils.ajax({
        url:"./gulpfile.js",
        success:function (data) {
            resolve(data)
        },
        error:function (err) {
            reject(err)
        }
    });
}));

var fck = p.map(function (a) {
    console.log(a)
    return a+1;
})
fck.subscribe(function (a) {
    console.log(a)
},function () {
    console.log("fck err")
});
*/

