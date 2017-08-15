"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer(props) {
        _super.call(this, props);
    }
    Footer.prototype.renderFilter = function (filter, name) {
        var _this = this;
        if (filter == this.props.filter) {
            return name;
        }
        return (<a href="#" onClick={function (e) {
            e.preventDefault();
            _this.props.onFilterChange(filter);
        }}>{name}</a>);
    };
    Footer.prototype.render = function () {
        return (<p>
                Show :
                {' '}
                {this.renderFilter("SHOW_ALL", "ALL")}
                {" , "}
                {this.renderFilter("SHOW_COMPLETE", "Completed")}
                {" , "}
                {this.renderFilter('SHOW_ACTIVE', "Active")}
            </p>);
    };
    return Footer;
}(React.Component));
exports.__esModule = true;
exports["default"] = Footer;
//# sourceMappingURL=Footer.js.map