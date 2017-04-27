var getRow = function(rowIndex:number):number[] {
    var arr = [];
    arr[0] = 1;
    for (let i = 1; i < rowIndex + 1; i++) {
        arr[i] = 0;
        for (let j = i; j >= 1; j--) {
            arr[j] += arr[j - 1];
        }
    }

    return arr;
};
var a = getRow(3)
console.log(a)