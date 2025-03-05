import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { RestServiceHandlers } from "../proto/nescordRestClient/RestService";
export declare class RestGrpcController implements RestServiceHandlers {
    [name: string]: any;
    call(call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>): Promise<void>;
}
