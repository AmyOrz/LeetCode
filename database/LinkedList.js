var LinkNode = (function () {
    function LinkNode(value, next) {
        this.value = value;
        this.next = next;
    }
    return LinkNode;
}());
var LinkList = (function () {
    function LinkList() {
    }
    LinkList.prototype.getHead = function () {
        return this.head;
    };
    LinkList.prototype.getArrayData = function (link) {
        var current = link == void 0 ? this.head : link;
        var listArr = [];
        while (current.next) {
            listArr.push(current.value);
            current = current.next;
        }
        listArr.push(current.value);
        return listArr;
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
        this._isExistPosition(target, this.getArrayData(this.head));
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
        this._isExistPosition(target, this.getArrayData(this.head));
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
    LinkList.prototype.removeDuplicate = function (head) {
        var current = head;
        while (current != null && current.next != null) {
            if (current.value == current.next.value) {
                current.next = current.next.next;
            }
            else {
                current = current.next;
            }
        }
        return head;
    };
    LinkList.prototype._isExistPosition = function (position, arrLen) {
        if (position < 0 || position > arrLen.length)
            return -1;
    };
    return LinkList;
}());
var link = new LinkList();
link.append(1);
link.append(1);
console.log(link.removeDuplicate(link.getHead()));
//# sourceMappingURL=LinkedList.js.map