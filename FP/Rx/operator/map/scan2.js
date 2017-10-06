var rx = require("rxjs");

//scan可认为是rx的reduce
//第1500毫秒发出0，然后scan把这个值和空数组进行操作，返回存储1个值的数组。
//第3000毫秒发出1，然后scan把这个值和之前的数组进行操作，返回存储2个值的数组。
var stream = rx.Observable.interval(1500).scan(function(arr,next){

    arr.push({
        name:"a"+next
    })
    return arr;
},[]).subscribe(function (x) {
    console.log(x)
})

