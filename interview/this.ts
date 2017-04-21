var length = 100;
function getLen(){
    console.log(this.length);
}
var obj = {
    length:5,
    method:function (fn) {
        fn();
        arguments[0]();
    }
};
obj.method(getLen);


function fck(){
    this.a = 123;

    setTimeout(()=>{
       this.a = 111;
        try{
            this.b = "fck";
        }catch(e){
            this.b = "this";
        }
    });
    this.b = "hehe";
}
var a = new fck();
console.log(a.a);
console.log(a.b);
