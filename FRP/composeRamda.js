var r = require("ramda");
var data = [
    {name:"yh1",sec:1},
    {name:"yh2",sec:1},
    {name:"yh3",sec:1},
    {name:"yh4",sec:0},
    {name:"yh5",sec:1}
];

var getNames = r.compose(
    r.map(function (d){ return d.name}),
    r.filter(function (d){return d.sec == 1})
);
console.log(getNames(data))

var getMan = function(d){
    return d.sec == 1;
}
var getWoMan = function(d){
    return d.sec == 0;
}
var filterMan = r.filter(getMan)
var filterWoMan = r.filter(getWoMan);

var getNames2 = r.compose(                         //function compose(a,b){return (data)=>a(b(data))    }
    r.map(function (d){ return d.name}),
    filterMan
);
console.log(getNames2(data));

