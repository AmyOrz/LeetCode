"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AddTodo = (function (_super) {
    __extends(AddTodo, _super);
    function AddTodo(props) {
        _super.call(this, props);
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
exports.__esModule = true;
exports["default"] = AddTodo;
//# sourceMappingURL=AddTodo.js.map