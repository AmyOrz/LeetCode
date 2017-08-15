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
var react_redux_1 = require("react-redux");
var CountAction = require("../action/Action");
var Counter_1 = require("../components/Counter");
var redux_1 = require("redux");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var dispatch = this.props.dispatch;
        var boundAction = redux_1.bindActionCreators(CountAction, dispatch);
        return (<Counter_1["default"] {...this.props} {...boundAction}></Counter_1["default"]>);
    };
    return App;
}(React.Component));
var mapStateToProps = function (state) {
    console.log(state);
    return {
        countNumber: state.countReducer.present.countNumber,
        name: state.countReducer.present.name,
        age: state.countReducer.present.age
    };
};
exports.__esModule = true;
exports["default"] = react_redux_1.connect(mapStateToProps)(App);
//# sourceMappingURL=App.js.map