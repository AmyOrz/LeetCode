var countSegments = function (s) {
    var res = s.match(/(\s\w+)|(\w+\s)/g);
    return res.length + 1;
};
var a = countSegments("hello this is my time");
console.log(a);
//# sourceMappingURL=434.js.map