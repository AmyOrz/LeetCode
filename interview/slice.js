function slice(arr, start, end) {
    if (arr == void 0) return [];
    if(start == void 0)return arr;

    var len = arr.length,
        newArr = [];

    start = (start >= 0) ? start : start+len;
    if(start < 0)start = 0;

    end = end == void 0 ? len : end;
    end = end >= len ? len:end;
    end = end < 0?end+len:end;

    var size = end - start;
    if(size > 0){
        for(var i = 0;i < size;i++){
            newArr[i] = arr[start+i];
        }
    }

    return newArr;

}
var array = [1, 2, 3];

console.log(slice(array), array.slice());
console.log(slice(array,-4,2), array.slice(-4,2));
console.log(slice(array,-1,3), array.slice(-1,3));
console.log(slice(array,4,2), array.slice(4,2));
