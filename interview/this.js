var length = 100;
function getLen() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    }
};
obj.method(getLen);
function fck() {
    var _this = this;
    this.a = 123;
    setTimeout(function () {
        _this.a = 111;
        try {
            _this.b = "fck";
        }
        catch (e) {
            _this.b = "this";
        }
    });
    this.b = "hehe";
}
var a = new fck();
console.log(a.a);
console.log(a.b);
//# sourceMappingURL=this.js.map