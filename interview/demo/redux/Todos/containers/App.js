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
var react_redux_1 = require("react-redux");
var CountAction = require("../action/Action");
var redux_1 = require("redux");
var AddTodo_1 = require("../components/AddTodo");
var Footer_1 = require("../components/Footer");
var TodoList_1 = require("../components/TodoList");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var _a = this.props, dispatch = _a.dispatch, visibleTodos = _a.visibleTodos, visibleFilter = _a.visibleFilter;
        var boundAction = redux_1.bindActionCreators(CountAction, dispatch);
        console.log(visibleFilter);
        console.log(visibleTodos);
        return (<div>
                <AddTodo_1["default"] onAddClick={boundAction.add}></AddTodo_1["default"]>
                <Footer_1["default"] filter={visibleFilter} onFilterChange={boundAction.filter}></Footer_1["default"]>
                <TodoList_1["default"] todos={visibleTodos} onTodoClick={boundAction.complete}></TodoList_1["default"]>
            </div>);
    };
    return App;
}(React.Component));
function selectTodos(todos, filter) {
    switch (filter) {
        case CountAction.visibilyFilter.SHOW_ALL: return todos;
        case CountAction.visibilyFilter.SHOW_COMPLETE: return todos.filter(function (todo) { return todo.completed; });
        case CountAction.visibilyFilter.SHOW_ACTIVE: return todos.filter(function (todo) { return !todo.completed; });
    }
}
var mapStateToProps = function (state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visFilter),
        visibleFilter: state.visFilter
    };
};
exports["default"] = react_redux_1.connect(mapStateToProps)(App);
//# sourceMappingURL=App.js.map