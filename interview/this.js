//输出100和1
var length = 100;
function getLen() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function (fn) {
        fn(); //内部函数在父函数中被调用时，this都执行global
        arguments[0]();
    },
    getLen2: function () {
        console.log(this.length);
    }
};
obj.method(getLen);
obj.method(obj.getLen2);
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
//这里call使用obj2当做this执行func
var obj2 = {};
var func = function (a, b) {
    this.foo = a; //obj2.foo = a;
    this.bar = b; //obj2.bar = b;
    console.log(this); //console.log(obj2);
};
func.call(obj2, 123, 321);
console.log(obj2);
//这里fck1中this指向global，this.hehe则为全局属性，可用global.hehe访问
function fck1() {
    console.log(this); //global
    this.hehe = 213;
}
fck1();
console.log(this.hehe); //213
//# sourceMappingURL=this.js.map