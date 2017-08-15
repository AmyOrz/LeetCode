"use strict";
var redux_1 = require("redux");
var Action_1 = require("../action/Action");
var SHOW_ALL = Action_1.visibilyFilter.SHOW_ALL;
function visFilter(state, action) {
    if (state === void 0) { state = SHOW_ALL; }
    switch (action.type) {
        case Action_1.FILTER: return action.filter;
        default: return state;
    }
}
;
function todos(state, action) {
    if (state === void 0) { state = [{
            text: "fck",
            completed: false
        }]; }
    switch (action.type) {
        case Action_1.ADD:
            return state.concat([{
                text: action.text,
                completed: false
            }]);
            break;
        case Action_1.COMPLETE: return state.slice(0, action.index).concat([
            Object.assign({}, state[action.index], {
                completed: true
            })
        ], state.slice(action.index + 1));
        default: return state;
    }
}
var rootReducer = redux_1.combineReducers({
    visFilter: visFilter,
    todos: todos
});
exports.__esModule = true;
exports["default"] = rootReducer;
//# sourceMappingURL=reducer.js.map