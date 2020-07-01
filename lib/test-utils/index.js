"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestUpdater = void 0;
var test_utils_1 = require("react-dom/test-utils");
exports.createTestUpdater = function (store) { return function (update) {
    test_utils_1.act(function () {
        store.update(update);
    });
}; };
//# sourceMappingURL=index.js.map