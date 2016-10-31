var LinkNode = (function () {
    function LinkNode(value, next) {
        this.value = value;
        this.next = next;
    }
    return LinkNode;
}());
var LinkList = (function () {
    function LinkList() {
        this.listArr = [];
    }
    LinkList.prototype.getHead = function () {
        return this.head;
    };
    LinkList.prototype.getArrayData = function () {
        var current = this.head;
        while (current.next) {
            this.listArr.push(current.value);
            current = current.next;
        }
        this.listArr.push(current.value);
        return this.listArr;
    };
    LinkList.prototype.append = function (val) {
        var node = new LinkNode(val, null);
        if (this.head == void 0) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    };
    LinkList.prototype.empty = function () {
        this.head = { value: null, next: null };
    };
    LinkList.prototype.insertAfter = function (target, val) {
        this._isExistPosition(target);
        var node = new LinkNode(val, null);
        var index = 0;
        var current = this.head;
        if (target == 0) {
            node.next = this.head;
            this.head = node;
        }
        else {
            while (current.next) {
                current = current.next;
                if (++index == target) {
                    node.next = current.next;
                    current.next = node;
                    break;
                }
            }
        }
    };
    LinkList.prototype.removeAt = function (target) {
        this._isExistPosition(target);
        var index = 0;
        var current = this.head;
        if (target == 0) {
            this.head = current.next;
        }
        else {
            while (current.next) {
                if (++index == target) {
                    current.next = current.next.next;
                    break;
                }
                current = current.next;
            }
        }
    };
    LinkList.prototype.reverse = function (head) {
        var node = head, pre = null, temp = null;
        while (node != void 0) {
            temp = node.next;
            node.next = pre;
            pre = node;
            node = temp;
        }
        return pre;
    };
    LinkList.prototype._isExistPosition = function (position) {
        if (position < 0 || position > this.listArr.length)
            return -1;
    };
    return LinkList;
}());
var link = new LinkList();
link.append(1);
link.append(11);
link.append(12);
link.append(13);
link.append(10);
link.append(7);
console.log(link.reverse(link.getHead()));
//# sourceMappingURL=LinkedList.js.map