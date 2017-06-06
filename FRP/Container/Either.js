"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var curry_1 = require("wonder-lodash/curry");
var toString_1 = require("wonder-lodash/toString");
var Either = (function () {
    function Either(x) {
        this.val = null;
        this.val = x;
    }
    Either.prototype.either = function (leftFn, rightFn) {
        return null;
    };
    return Either;
}());
exports.Either = Either;
var Right = (function (_super) {
    __extends(Right, _super);
    function Right() {
        _super.apply(this, arguments);
    }
    Right.of = function (x) {
        var obj = new this(x);
        return obj;
    };
    Right.prototype.isRight = function () {
        return true;
    };
    Right.prototype.isLeft = function () {
        return false;
    };
    Right.prototype.map = function (f) {
        return Right.of(f(this.val));
    };
    Right.prototype.ap = function (that) {
        return that.map(this.val);
    };
    Right.prototype.chain = function (f) {
        return f(this.val);
    };
    Right.prototype.toString = function () {
        return "Right(" + toString_1["default"](this.val) + ")";
    };
    return Right;
}(Either));
exports.Right = Right;
Right.prototype.either = curry_1["default"](function either(leftFn, rightFn) {
    return rightFn(this.val);
});
var Left = (function (_super) {
    __extends(Left, _super);
    function Left() {
        _super.apply(this, arguments);
    }
    Left.of = function (x) {
        var obj = new this(x);
        return obj;
    };
    Left.prototype.isRight = function () {
        return false;
    };
    Left.prototype.isLeft = function () {
        return true;
    };
    Left.prototype.map = function (f) {
        return this;
    };
    Left.prototype.ap = function (that) {
        return this;
    };
    Left.prototype.chain = function (f) {
        return this;
    };
    Left.prototype.toString = function () {
        return "Left(" + toString_1["default"](this.val) + ")";
    };
    return Left;
}(Either));
exports.Left = Left;
Left.prototype.either = curry_1["default"](function either(leftFn, rightFn) {
    return leftFn(this.val);
});
//# sourceMappingURL=Either.js.map