"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var Todo_1 = require("./Todo");
var TodoList = (function (_super) {
    __extends(TodoList, _super);
    function TodoList(props) {
        return _super.call(this, props) || this;
    }
    TodoList.prototype.render = function () {
        var _a = this.props, todos = _a.todos, onTodoClick = _a.onTodoClick;
        var todoList = todos == void 0 ? [] : todos;
        return (<ul>
                {todoList.map(function (todo, index) {
            return <Todo_1["default"] {...todo} key={index} onClick={function () { return onTodoClick(index); }}></Todo_1["default"]>;
        })}
            </ul>);
    };
    return TodoList;
}(React.Component));
exports["default"] = TodoList;
//# sourceMappingURL=TodoList.js.map