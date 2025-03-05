"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestGrpcController = void 0;
class RestGrpcController {
    async call(call, callback) {
        console.log(call.request);
        callback(null, { body: "waw" });
    }
}
exports.RestGrpcController = RestGrpcController;
