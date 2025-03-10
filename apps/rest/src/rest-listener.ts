import { loadSync } from "@grpc/proto-loader";
import { RestListenerOptions } from "./interface/rest-listener.interface";
import { join } from "path";
import * as grpc from "@grpc/grpc-js";
import { ProtoGrpcType } from "./proto/nescord-rest";
import { RestHandlerService } from "./service/rest-handler.service";
import { RestGrpcController } from "./controllers/rest-grpc.controller";

export class RestListener {
  private options: RestListenerOptions;

  constructor(options: RestListenerOptions) {
    this.options = options;
    this.initializeGrpcServer();
  }

  private async initializeGrpcServer() {
    const packageDefinition = loadSync(
      join(__dirname, "./proto/nescord-rest.proto")
    );
    const proto = grpc.loadPackageDefinition(
      packageDefinition
    ) as unknown as ProtoGrpcType;
    const grpcServer = new grpc.Server();
    const grpcController = new RestGrpcController();

    grpcServer.addService(
      proto.nescordRestClient.RestService.service,
      grpcController
    );

    grpcServer.bindAsync(
      this.options.gRPCHost,
      grpc.ServerCredentials.createInsecure(),
      (err) => {
        if (err) {
          console.error(err);

          return;
        }
        grpcServer.start();
        console.log(`gRPC server started on ${this.options.gRPCHost}`);
      }
    );
  }
}
