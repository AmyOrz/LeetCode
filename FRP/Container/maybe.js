var _ = require("ramda");

var head = function (x) {
    return _.of(x[0]);
}
var stree = _.compose(head,_.prop("hehe"))
console.log(stree({hehe:[{fck:"arvin",a:123}]}));


var a = _.multiply(2,4);
var b = _.
console.log(a,b)
