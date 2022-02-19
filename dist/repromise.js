"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repromise = void 0;
/**
 * This class is to easy to understand ;) Only is a wrapper for standar JavaScript Promise.
 */
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
        return this.promise;
    };
    Repromise.prototype.reject = function (rejectReason) {
        this.rejectCallback(rejectReason);
        return this.promise;
    };
    Repromise.prototype.getPromise = function () {
        return this.promise;
    };
    return Repromise;
}());
exports.Repromise = Repromise;
