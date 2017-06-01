var compose = function (f,g) {
    return function (x) {
        return f(g(x));
    }
};

var upper = function (x) {
    return x.toUpperCase();
};
var explan = function (x) {
    return x + "!!"
};

var angry = compose(upper,explan);
var res = angry("what fck is hehe");
console.log(res)

