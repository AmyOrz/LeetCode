//常规的a1,a2内部都含有作用域链【scope】，内有自由变量a,a1调用2次自由变量一直存在而且改变
function bibao() {
    var a = 100;
    return function () {
        a += 10;
        console.log(a);
    };
}
var a1 = bibao();
var a2 = bibao();
a1();
a1();
a2();
// var start = Date.now();
// for(var i = 1;i<5;i++){
//     setTimeout(()=>{
//         console.log(Date.now() - start);
//         console.log(i)
//     },i*1000);
// }
//从第二秒开始运行2->1,3->2,4->3,5->4
var start = Date.now();
function fck() {
    for (var i = 1; i < 5; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(Date.now() - start);
                console.log(i);
            }, i * 1000);
        })(i);
    }
}
setTimeout(function () {
    fck();
}, 1000);
//# sourceMappingURL=bibao.js.map