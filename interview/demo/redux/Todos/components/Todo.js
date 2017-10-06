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
var Todo = (function (_super) {
    __extends(Todo, _super);
    function Todo(props) {
        return _super.call(this, props) || this;
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
exports["default"] = Todo;
//# sourceMappingURL=Todo.js.map