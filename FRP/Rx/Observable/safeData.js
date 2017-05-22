"use strict";
var safeData = (function () {
    function safeData(observer) {
        this._isUnsubscribed = false;
        this.observer = observer;
    }
    safeData.prototype.next = function (value) {
        if (!this._isUnsubscribed && this.observer.next) {
            this.observer.next(value);
        }
    };
    safeData.prototype.error = function (err) {
        if (!this._isUnsubscribed && this.observer.error) {
            this.observer.error(err);
        }
        this.unsubscribe();
    };
    safeData.prototype.complete = function () {
        if (!this._isUnsubscribed && this.observer.complete) {
            this.observer.complete();
        }
        this.unsubscribe();
    };
    safeData.prototype.unsubscribe = function () {
        this._isUnsubscribed = true;
        if (this.unsub) {
            this.unsub();
        }
    };
    return safeData;
}());
exports.safeData = safeData;
//# sourceMappingURL=safeData.js.map