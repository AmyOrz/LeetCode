"use strict";
exports.__esModule = true;
exports.FETCH_USER = "FETCH_USER";
exports.FETCH_USER_FULFILLED = "FETCH_USER_FULFILLED";
exports.fetchUser = function (username) { return ({ type: exports.FETCH_USER, payload: username }); };
exports.fetchUserFulfilled = function (payload) { return ({ type: exports.FETCH_USER_FULFILLED, payload: payload }); };
//# sourceMappingURL=Action.js.map