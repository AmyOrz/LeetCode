"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var App_1 = require("./containers/App");
var reducer_1 = require("./reducers/reducer");
var store = redux_1.createStore(reducer_1["default"]);
ReactDOM.render(<div>
        <react_redux_1.Provider store={store}>
            <App_1["default"] />
        </react_redux_1.Provider>
    </div>, document.querySelector("#ct"));
//# sourceMappingURL=index.js.map