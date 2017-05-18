var QuickSort = (function () {
    function QuickSort(arrays) {
        this.arrays = arrays;
    }
    QuickSort.prototype.sort = function () {
        this._sort(0, this.arrays.length - 1);
    };
    QuickSort.prototype.showData = function () {
        var s = "";
        for (var _i = 0, _a = this.arrays; _i < _a.length; _i++) {
            var i = _a[_i];
            s = s + i + " ";
        }
        console.log(s);
    };
    QuickSort.prototype._sort = function (lower, hight) {
        if (hight <= lower)
            return;
        var j = this._particular(lower, hight);
        this._sort(lower, j - 1);
        this._sort(j + 1, hight);
    };
    QuickSort.prototype._particular = function (lower, hight) {
        var i = lower, j = hight + 1, temp = this.arrays[lower];
        while (true) {
            while (this.arrays[++i] < temp)
                ;
            while (this.arrays[--j] > temp)
                ;
            if (i >= j)
                break;
            this._exchange(i, j);
        }
        this._exchange(lower, j);
        return j;
    };
    QuickSort.prototype._exchange = function (i, j) {
        var temp = this.arrays[i];
        this.arrays[i] = this.arrays[j];
        this.arrays[j] = temp;
    };
    return QuickSort;
}());
var qs = new QuickSort([5, 487, 8, 87, 3, 545, 5, 55, 45, 251, 25, 52]);
qs.sort();
qs.showData();
//# sourceMappingURL=quickSort.js.map