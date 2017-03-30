//the first function
var a = {};
var _loop_1 = function(i_1) {
    a[i_1] = function () {
        console.log(i_1);
    };
};
for (var i_1 = 0; i_1 < 4; i_1++) {
    _loop_1(i_1);
}
a[3]();
//the second function
var b = {};
for (var i = 0; i < 4; i++) {
    b[i] = (function () {
        var m = i;
        return function () {
            console.log(m);
        };
    })();
}
b[2]();
//the three function
var c = {};
for (var j = 0; j < 4; j++) {
    c[j] = (function (j) {
        return function () { return console.log(j); };
    })(j);
}
c[1]();
//# sourceMappingURL=closure.js.map