var rx = require("rxjs");

var stream = rx.Observable.from([
    '{"1": 1, "2": 2}',
    '{"success: true}', // Invalid JSON string
    '{"enabled": true}'
]).map(function(res){
    return JSON.parse(res)
}).subscribe(function (res) {
    // console.log(res)
},function (err) {
    console.log(1231231)
    console.log(err)
});
