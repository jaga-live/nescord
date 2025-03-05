import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { RestServiceHandlers } from "../proto/nescordRestClient/RestService";

export class RestGrpcController implements RestServiceHandlers {
  [name: string]: any;

  async call(call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) {
    console.log(call.request);
    callback(null, { body: "waw" });
  }
}
