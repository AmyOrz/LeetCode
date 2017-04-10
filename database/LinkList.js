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
        if (head == void 0)
            return null;
        if (head.next == void 0)
            return head;
        var first = head;
        var result = null;
        var temp = null;
        while (first != null) {
            temp = first;
            first = first.next;
            temp.next = result;
            result = temp;
        }
        return result;
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
    LinkList.prototype.isCycleLink = function (head) {
        if (!head) {
            return false;
        }
        var hash = {};
        while (head) {
            //the second cycle enter if
            if (hash[head.value]) {
                for (var i = 0; i < hash[head.value].length; i++) {
                    if (head === hash[head.value][i]) {
                        return true;
                    }
                }
                //再次遍历这个
                hash[head.value].push(head);
            }
            else {
                hash[head.value] = [head];
            }
            head = head.next;
        }
        return false;
    };
    LinkList.prototype.removeLinkFromEnd = function (head, n) {
        var start = new LinkNode(null, null);
        var fast = start;
        var step = start;
        fast.next = head;
        for (var i = 0; i <= n; i++) {
            step = step.next;
        }
        while (step != void 0) {
            fast = fast.next;
            step = step.next;
        }
        fast.next = fast.next.next;
        return start;
    };
    LinkList.prototype.mergeTwoLists = function (l1, l2) {
        if (l1 == void 0)
            return l2;
        if (l2 == void 0)
            return l1;
        if (l1.value < l2.value) {
            l1.next = this.mergeTwoLists(l1.next, l2);
            return l1;
        }
        else {
            l2.next = this.mergeTwoLists(l1, l2.next);
            return l2;
        }
    };
    LinkList.prototype.getIntersectionNode = function (headA, headB) {
        if (headA == void 0 || headB == void 0)
            return null;
        var currentA = headA;
        var currentB = headB;
        while (currentA != currentB) {
            currentA = currentA == void 0 ? currentB : currentA.next;
            currentB = currentB == void 0 ? currentA : currentB.next;
        }
        return headA;
    };
    LinkList.prototype._isExistPosition = function (position, arrLen) {
        if (position < 0 || position > arrLen.length)
            return -1;
    };
    return LinkList;
}());
var link = new LinkList();
link.append(4);
link.append(8);
link.append(32);
link.append(77);
var link2 = new LinkList();
link2.append(9);
link2.append(1);
link2.append(5);
link2.append(99);
var fck = link.mergeTwoLists(link.getHead(), link2.getHead());
console.log(link.getArrayData(fck));
//# sourceMappingURL=LinkList.js.map