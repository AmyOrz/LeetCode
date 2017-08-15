"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var redux_1 = require("redux");
var redux_observable_1 = require("redux-observable");
var reducer_1 = require("./reducers/reducer");
var redux_2 = require("redux");
var react_redux_1 = require("react-redux");
var App_1 = require("./containers/App");
var epicMiddleware = redux_observable_1.createEpicMiddleware(reducer_1.pingEpic);
//noinspection TypeScriptValidateTypes
var store = redux_1.createStore(reducer_1.pingReducer, redux_2.applyMiddleware(epicMiddleware));
ReactDOM.render(<div>
        <react_redux_1.Provider store={store}>
            <App_1["default"] />
        </react_redux_1.Provider>
    </div>, document.querySelector("#ct"));
//# sourceMappingURL=index.js.map