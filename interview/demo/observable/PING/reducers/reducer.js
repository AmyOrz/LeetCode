"use strict";
var Action_1 = require("../action/Action");
require('rxjs/add/operator/delay');
require('rxjs/add/operator/mapTo');
exports.pingEpic = function (action$) {
    return action$.ofType(Action_1.PING).delay(2000).mapTo({
        type: Action_1.PONG
    });
};
exports.pingReducer = function (state, action) {
    if (state === void 0) { state = { isPinging: false }; }
    switch (action.type) {
        case Action_1.PING: return { isPinging: true };
        case Action_1.PONG: return { isPinging: false };
        default: return state;
    }
};
//# sourceMappingURL=reducer.js.map