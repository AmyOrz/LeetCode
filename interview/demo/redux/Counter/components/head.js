"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Head = (function (_super) {
    __extends(Head, _super);
    function Head(props) {
        _super.call(this, props);
    }
    Head.prototype.render = function () {
        return (<header className="head">{this.props.head}</header>);
    };
    return Head;
}(React.Component));
exports.__esModule = true;
exports["default"] = Head;
//# sourceMappingURL=head.js.map