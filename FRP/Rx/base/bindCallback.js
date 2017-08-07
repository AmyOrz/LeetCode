var rx = require("rxjs");

var func = function (f) {
    f("hehe");
};

var bindFunc = rx.Observable.bindCallback(func)();
bindFunc.subscribe(function (fck) {
    console.log(fck)
});
