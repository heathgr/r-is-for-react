"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useStore = function (store) {
    var _a = react_1.useState(store.current), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        return store.subscribe(function (newState) {
            setState(newState);
        });
    }, []);
    return state;
};
//# sourceMappingURL=index.js.map