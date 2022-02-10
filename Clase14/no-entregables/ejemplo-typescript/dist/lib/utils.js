"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
var getTime = function () {
    return {
        fyh: new Date().toDateString(),
        timestamp: Date.now()
    };
};
exports.getTime = getTime;
