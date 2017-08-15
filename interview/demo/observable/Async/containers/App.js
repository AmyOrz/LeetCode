"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_redux_1 = require("react-redux");
var CountAction = require("../action/Action");
var redux_1 = require("redux");
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        _super.call(this, props);
        this._dispatch = this.props.dispatch;
        this._actions = redux_1.bindActionCreators(CountAction, this._dispatch);
    }
    App.prototype.componentDidMount = function () {
        console.log(this._actions);
        this._actions.fetchUser("redux-observable");
    };
    App.prototype.render = function () {
        var info = this.props.info;
        var user = info["redux-observable"] || "";
        return (<div>
                <div>{user && <span>{JSON.stringify(user)}</span>}</div>
            </div>);
    };
    return App;
}(React.Component));
var mapStateToProps = function (state) {
    return {
        info: state
    };
};
exports.__esModule = true;
exports["default"] = react_redux_1.connect(mapStateToProps)(App);
//# sourceMappingURL=App.js.map