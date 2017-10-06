"use strict";
exports.__esModule = true;
var DataSource = (function () {
    function DataSource() {
        var _this = this;
        var i = 0;
        this._id = setInterval(function () { return _this.emit(i++); }, 200);
    }
    DataSource.prototype.emit = function (n) {
        var limit = 10;
        if (this.next) {
            this.next(n);
        }
        if (n == (limit - 3)) {
            if (this.error) {
                this.error("fck");
            }
        }
        if (n == limit) {
            if (this.complete) {
                this.complete();
            }
            this.destory();
        }
    };
    DataSource.prototype.destory = function () {
        clearInterval(this._id);
    };
    return DataSource;
}());
exports.DataSource = DataSource;
//# sourceMappingURL=DataSource.js.map