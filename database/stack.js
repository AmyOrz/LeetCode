var Stack = (function () {
    function Stack() {
        this._stackArr = [];
    }
    Stack.prototype.push = function (target) {
        this._stackArr.push(target);
    };
    Stack.prototype.pop = function () {
        this._stackArr.pop();
    };
    Stack.prototype.top = function () {
        return this._stackArr.length > 0 ? this._stackArr[0] : null;
    };
    Stack.prototype.empty = function () {
        return this._stackArr.length == 0;
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.top());
//# sourceMappingURL=stack.js.map