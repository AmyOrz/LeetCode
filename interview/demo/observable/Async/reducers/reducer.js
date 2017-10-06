"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var Action_1 = require("../action/Action");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/map");
var ajax_1 = require("rxjs/observable/dom/ajax");
exports.fetchUserEpic = function (action$) { return (action$.ofType(Action_1.FETCH_USER)
    .mergeMap(function (action) {
    return ajax_1.ajax.getJSON("https://api.github.com/users/" + action.payload)
        .map(function (response) { return Action_1.fetchUserFulfilled(response); });
})); };
exports.users = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case Action_1.FETCH_USER_FULFILLED: return __assign({}, state, (_a = {}, _a[action.payload.login] = action.payload, _a));
        default: return state;
    }
    var _a;
};
//# sourceMappingURL=reducer.js.map