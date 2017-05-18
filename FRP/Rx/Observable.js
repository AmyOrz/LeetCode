/**
 * A contrived data source to use in our "observable"
 * NOTE: this will clearly never error
 */
var DataSource = (function () {
    function DataSource() {
        var _this = this;
        var i = 0;
        this._id = setInterval(function () { return _this.emit(i++); }, 200);
    }
    DataSource.prototype.emit = function (n) {
        var limit = 10;
        if (this.ondata) {
            this.ondata(n);
        }
        if (n === limit) {
            if (this.oncomplete) {
                this.oncomplete();
            }
            this.destroy();
        }
    };
    DataSource.prototype.destroy = function () {
        clearInterval(this._id);
    };
    return DataSource;
}());
/**
 * Safe Observer
 */
var SafeObserver = (function () {
    function SafeObserver(destination) {
        this.destination = destination;
    }
    SafeObserver.prototype.next = function (value) {
        // only try to next if you're subscribed have a handler
        if (!this.isUnsubscribed && this.destination.next) {
            try {
                this.destination.next(value);
            }
            catch (err) {
                // if the provided handler errors, teardown resources, then throw
                this.unsubscribe();
                throw err;
            }
        }
    };
    SafeObserver.prototype.error = function (err) {
        // only try to emit error if you're subscribed and have a handler
        if (!this.isUnsubscribed && this.destination.error) {
            try {
                this.destination.error(err);
            }
            catch (e2) {
                // if the provided handler errors, teardown resources, then throw
                this.unsubscribe();
                throw e2;
            }
            this.unsubscribe();
        }
    };
    SafeObserver.prototype.complete = function () {
        // only try to emit completion if you're subscribed and have a handler
        if (!this.isUnsubscribed && this.destination.complete) {
            try {
                this.destination.complete();
            }
            catch (err) {
                // if the provided handler errors, teardown resources, then throw
                this.unsubscribe();
                throw err;
            }
            this.unsubscribe();
        }
    };
    SafeObserver.prototype.unsubscribe = function () {
        this.isUnsubscribed = true;
        if (this.unsub) {
            this.unsub();
        }
    };
    return SafeObserver;
}());
/**
 * our observable
 */
function myObservable(observer) {
    var safeObserver = new SafeObserver(observer);
    var datasource = new DataSource();
    datasource.ondata = function (e) { return safeObserver.next(e); };
    datasource.onerror = function (err) { return safeObserver.error(err); };
    datasource.oncomplete = function () { return safeObserver.complete(); };
    safeObserver.unsub = function () {
        datasource.destroy();
    };
    return safeObserver.unsubscribe.bind(safeObserver);
}
/**
 * now let's use it
 */
var unsub = myObservable({
    next: function (x) { console.log(x); },
    error: function (err) { console.error(err); },
    complete: function () { console.log('done'); }
});
/**
 * uncomment to try out unsubscription
 */
// setTimeout(unsub, 500);
//# sourceMappingURL=Observable.js.map