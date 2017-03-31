//the first function

var a = {};
for(let i = 0;i<4;i++){
    a[i] = function () {
        console.log(i);
    }
}
a[3]();

//the second function

var b = {};
for(var i = 0;i<4;i++){
    b[i] = (function () {
        var m = i;
        return ()=>{
            console.log(m);
        }
    })();
}
b[2]();

//the three function
var c = {};
for(var j = 0;j<4;j++){
    c[j] = (function (j) {
        return ()=>console.log(j);
    })(j);
}
c[1]();



