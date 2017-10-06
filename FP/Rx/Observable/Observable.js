"use strict";
exports.__esModule = true;
var safeData_1 = require("./safeData");
var DataSource_1 = require("./DataSource");
var Observable = (function () {
    function Observable(subscribe) {
        this._subscribe = subscribe;
    }
    Observable.prototype.subscribe = function (observer) {
        var safe = new safeData_1.safeData(observer);
        safe.unsub = this._subscribe(safe);
        return safe.unsubscribe.bind(safe);
    };
    return Observable;
}());
exports.Observable = Observable;
function map(observable, func) {
    return new Observable(function (observer) {
        return observable.subscribe({
            next: function (x) { return observer.next(func(x)); },
            error: function (err) { return observer.error(err); },
            complete: function () { return observer.complete(); }
        });
    });
}
var myObservable = new Observable(function (observer) {
    var dataSource = new DataSource_1.DataSource();
    dataSource.next = function (e) { return observer.next(e); };
    dataSource.error = function (e) { return observer.error(e); };
    dataSource.complete = function (e) { return observer.complete(); };
    return function () { return dataSource.destory(); };
});
var unsubscribe = map(myObservable, function (x) { return x + x; }).subscribe({
    next: function (x) {
        console.log(x);
    },
    error: function (err) {
        console.log(err);
    },
    complete: function () {
        console.log("over");
    }
});
//# sourceMappingURL=Observable.js.map