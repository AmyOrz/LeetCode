var _ = require("lodash");
var data = [
    {name:"yh1",sec:1},
    {name:"yh2",sec:1},
    {name:"yh3",sec:1},
    {name:"yh4",sec:0},
    {name:"yh5",sec:1}
];

var a = _(data).filter(function (d) {
    return d.sec == 1;
}).map(function (d) {
    return d.name
}).value();
console.log(a)

var b = _.map(
    _.filter(data,function(d){return d.sec == 1}),
    function(d){return d.name}
);
console.log(b);

