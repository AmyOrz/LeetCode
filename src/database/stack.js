var StackNode = (function () {
    function StackNode(val, next) {
        this.val = val;
        this.next = next;
    }
    return StackNode;
}());
var Stack = (function () {
    function Stack() {
    }
    Stack.prototype.push = function (val) {
        var oldNode = this.first;
        this.first = new StackNode(val, null);
        this.first.next = oldNode;
        this.len++;
    };
    Stack.prototype.pop = function () {
        var oldNode = this.first;
        this.first = oldNode.next;
        this.len--;
        return oldNode.val;
    };
    Stack.prototype.top = function () {
        if (this.first == void 0)
            return null;
        else
            return this.first.val;
    };
    Stack.prototype.isEmpty = function () {
        return this.len == 0;
    };
    return Stack;
}());
//# sourceMappingURL=stack.js.map