var HeadpSort = (function () {
    function HeadpSort(array) {
        this.array = [];
        this.array.push(0);
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var i = array_1[_i];
            this.array.push(i);
        }
    }
    HeadpSort.prototype.sort = function () {
        var len = this.array.length - 1;
        for (var i = len / 2; i >= 1; i--)
            this._sink(i, len);
        while (len > 1) {
            this._exchange(1, len--);
            this._sink(1, len);
        }
    };
    HeadpSort.prototype._sink = function (i, len) {
        if (i < 0 || i >= len)
            return;
        while ((i * 2 + 1) < len) {
            var k = i * 2;
            if (this.array[k] < this.array[k + 1])
                k++;
            if (this.array[k] < this.array[i])
                return;
            this._exchange(i, k);
            i = k;
        }
    };
    HeadpSort.prototype._exchange = function (i, j) {
        var temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    };
    return HeadpSort;
}());
//# sourceMappingURL=headpSort.js.map