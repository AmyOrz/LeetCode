"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var Todo_1 = require("./Todo");
var TodoList = (function (_super) {
    __extends(TodoList, _super);
    function TodoList(props) {
        _super.call(this, props);
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
exports.__esModule = true;
exports["default"] = TodoList;
//# sourceMappingURL=TodoList.js.map