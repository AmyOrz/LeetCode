"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Todo = (function (_super) {
    __extends(Todo, _super);
    function Todo(props) {
        _super.call(this, props);
    }
    Todo.prototype.render = function () {
        console.log(this.props);
        var _a = this.props, onClick = _a.onClick, text = _a.text, completed = _a.completed;
        return (<li onClick={onClick} style={{
            textDecoration: completed ? "line-through" : "none",
            corsor: completed ? "default" : "pointer"
        }}>
                {text}
            </li>);
    };
    return Todo;
}(React.Component));
exports.__esModule = true;
exports["default"] = Todo;
//# sourceMappingURL=Todo.js.map