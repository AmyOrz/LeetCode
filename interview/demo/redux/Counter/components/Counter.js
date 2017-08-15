"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Counter = (function (_super) {
    __extends(Counter, _super);
    function Counter(props) {
        _super.call(this, props);
    }
    Counter.prototype.render = function () {
        var _a = this.props, countNumber = _a.countNumber, name = _a.name, age = _a.age, changeCount = _a.changeCount, undo = _a.undo, redo = _a.redo;
        console.log(this.props);
        return (<div>
                <p>
                    <label>fck Counter: </label>
                    <b>#{countNumber}</b>
                    <b>#{name}</b>
                    <b>#{age}</b>
                </p>
                <button onClick={function () { return changeCount(1); }}>INCREMENT</button>
                <span style={{ padding: "0 5px" }}/>
                <button onClick={function () { return changeCount(-1); }}>DECREMENT</button>

                <button onClick={undo}>Undo</button>
                <span> </span>
                <button onClick={redo}>Redo</button>
            </div>);
    };
    return Counter;
}(React.Component));
exports.__esModule = true;
exports["default"] = Counter;
//# sourceMappingURL=Counter.js.map