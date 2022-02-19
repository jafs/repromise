"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repromise = /** @class */ (function () {
    function Repromise() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolveCallback = resolve;
            _this.rejectCallback = reject;
        });
    }
    Repromise.prototype.resolve = function (resolveValue) {
        this.resolveCallback(resolveValue);
    };
    Repromise.prototype.reject = function (rejectReason) {
        this.rejectCallback(rejectReason);
    };
    Repromise.prototype.getPromise = function () {
        return this.promise;
    };
    return Repromise;
}());
exports.default = Repromise;
