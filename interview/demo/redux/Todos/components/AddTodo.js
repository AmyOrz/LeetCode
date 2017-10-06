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
var AddTodo = (function (_super) {
    __extends(AddTodo, _super);
    function AddTodo(props) {
        return _super.call(this, props) || this;
    }
    AddTodo.prototype.render = function () {
        var _this = this;
        return (<div>
                <input type="text" ref="input"/>
                <button onClick={function (e) { return _this.handleClick(e); }}>Add</button>
            </div>);
    };
    AddTodo.prototype.handleClick = function (e) {
        var onAddClick = this.props.onAddClick;
        //noinspection TypeScriptUnresolvedVariable
        var node = this.refs.input;
        var text = node.value.trim();
        onAddClick(text);
        node.value = '';
    };
    return AddTodo;
}(React.Component));
exports["default"] = AddTodo;
//# sourceMappingURL=AddTodo.js.map