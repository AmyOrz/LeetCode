"use strict";
exports.CHANGE_COUNT = "CHANGE_COUNT";
exports.UNDO_COUNT = "UNDO_COUNT";
exports.REDO_COUNT = "REDO_COUNT";
function changeCount(counter) {
    return {
        type: exports.CHANGE_COUNT,
        counter: counter
    };
}
exports.changeCount = changeCount;
function undo() {
    return {
        type: exports.UNDO_COUNT
    };
}
exports.undo = undo;
function redo() {
    return {
        type: exports.REDO_COUNT
    };
}
exports.redo = redo;
//# sourceMappingURL=Action.js.map