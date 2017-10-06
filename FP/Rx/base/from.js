var rx = require("rxjs");

var stream = rx.Observable.from([[1,2,3,4,5]]).subscribe(function (res) {
    console.log(res)
},function (err) {
    // console.log(1231231)
    // console.log(err)
});
