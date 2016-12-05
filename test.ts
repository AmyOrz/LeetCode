let lastTime:number = Date.now();
let sum:number = 0;
/*for(let j = 0;j<4;j++) {
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
}*/
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
let nowTime:number = Date.now();
console.log(nowTime-lastTime);