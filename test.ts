var unit = ['','十','百','千','万'];
var n2c = ['零','一','二','三','四','五','六','七','八','九'];

function convert(i) {
    return i.toString().split('').reverse().map(function(value, key){
        return n2c[value] + unit[key]

    }).reverse().join('').replace(/(零.)+/g,'零').replace(/^零|零+$/,'').replace(/二(?=[万千])/g,'两').replace(/^一十/g,'十')
}
console.log(convert(22211))
var a = "123";
console.log(~~a)