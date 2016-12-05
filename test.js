var lastTime = Date.now();
var sum = 0;
/*for(let j = 0;j<4;j++) {
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
}*/
for (var i = 0; i < 1000000000; i++) {
    sum += i;
}
for (var i = 0; i < 1000000000; i++) {
    sum += i;
}
for (var i = 0; i < 1000000000; i++) {
    sum += i;
}
for (var i = 0; i < 1000000000; i++) {
    sum += i;
}
var nowTime = Date.now();
console.log(nowTime - lastTime);
//# sourceMappingURL=test.js.map