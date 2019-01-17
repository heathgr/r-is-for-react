"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var StoreProvider = /** @class */ (function (_super) {
    __extends(StoreProvider, _super);
    function StoreProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.handleState = function (state) { return new Promise(function (resolve) {
            _this.setState(state, function () { return resolve(state); });
        }); };
        var store = _this.props.store;
        _this.state = store.getState();
        store.subscribe(_this.handleState);
        return _this;
    }
    StoreProvider.prototype.render = function () {
        return this.props.children(this.state);
    };
    return StoreProvider;
}(react_1.Component));
exports.StoreProvider = StoreProvider;
//# sourceMappingURL=index.js.map