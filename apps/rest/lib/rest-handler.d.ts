import { RestHandlerOptions } from "./interface/rest-handler.interface";
export declare class RestHandler {
    private options;
    private grpcClient;
    constructor(options: RestHandlerOptions);
    private initializeGrpcClient;
    test(): Promise<import("@grpc/grpc-js/build/src/call").SurfaceCall>;
}
