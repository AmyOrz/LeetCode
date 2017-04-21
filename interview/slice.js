function slice(arr, start, end) {
    if (arr == void 0)
        return [];
    if (start == void 0 || end == void 0)
        return arr;
}
var array = [1, 2, 3];
console.log(slice(array), [1, 2, 3]);
console.log(slice(array,-5,2), [1, 2]);
