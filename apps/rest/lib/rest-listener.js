"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestListener = void 0;
const proto_loader_1 = require("@grpc/proto-loader");
const path_1 = require("path");
const grpc = __importStar(require("@grpc/grpc-js"));
const rest_grpc_controller_1 = require("./controllers/rest-grpc.controller");
class RestListener {
    options;
    constructor(options) {
        this.options = options;
        this.initializeGrpcServer();
    }
    async initializeGrpcServer() {
        const packageDefinition = (0, proto_loader_1.loadSync)((0, path_1.join)(__dirname, "./proto/nescord-rest.proto"));
        const proto = grpc.loadPackageDefinition(packageDefinition);
        const grpcServer = new grpc.Server();
        const grpcController = new rest_grpc_controller_1.RestGrpcController();
        grpcServer.addService(proto.nescordRestClient.RestService.service, grpcController);
        grpcServer.bindAsync(this.options.gRPCHost, grpc.ServerCredentials.createInsecure(), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            grpcServer.start();
            console.log(`gRPC server started on ${this.options.gRPCHost}`);
        });
    }
}
exports.RestListener = RestListener;
