"use strict";
var redux_1 = require("redux");
var Action_1 = require("../action/Action");
//noinspection TypeScriptCheckImport
var redux_undo_1 = require("redux-undo");
var initState = {
    countNumber: 0,
    name: "arvin",
    age: 23
};
var countReducer = function (state, action) {
    if (state === void 0) { state = initState; }
    var name = action.type == Action_1.CHANGE_COUNT ? "yanghao" : "";
    switch (action.type) {
        case Action_1.CHANGE_COUNT:
            return Object.assign({}, state, {
                countNumber: state.countNumber + action.counter,
                name: name,
                age: state.age + action.counter
            });
            break;
        default: return state;
    }
};
var rootReducer = redux_1.combineReducers({
    countReducer: redux_undo_1["default"](countReducer, {
        filter: redux_undo_1.includeAction([Action_1.CHANGE_COUNT]),
        undoType: Action_1.UNDO_COUNT,
        redoType: Action_1.REDO_COUNT,
        debug: true
    })
});
exports.__esModule = true;
exports["default"] = rootReducer;
//# sourceMappingURL=reducer.js.map