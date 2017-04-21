function fck(a,b){
    this.a = a;
    this.b = b;
}
var fck1 = new fck(1,2);
var fck2 = fck(1,2);
console.log(fck1.a,fck2)

//因为这里fck2为函数执行返回值（undefined），所以fck2.b报错Error
