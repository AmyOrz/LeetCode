"use strict";
exports.__esModule = true;
exports.ADD = "ADD";
exports.COMPLETE = "COMPLETE";
exports.FILTER = "FILTER";
exports.visibilyFilter = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETE: "SHOW_COMPLETE",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};
function add(text) {
    return {
        type: exports.ADD,
        text: text
    };
}
exports.add = add;
function complete(index) {
    return {
        type: exports.COMPLETE,
        index: index
    };
}
exports.complete = complete;
function filter(filter) {
    return {
        type: exports.FILTER,
        filter: filter
    };
}
exports.filter = filter;
//# sourceMappingURL=Action.js.map