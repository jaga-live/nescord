import { join } from "path";
import { RestClientOptions } from "./interface/rest-client.interface";
import { loadSync } from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import { RestServiceClient } from "./proto/nescordRestClient/RestService";
import { ProtoGrpcType } from "./proto/nescord-rest";

export class RestClient {
  private options: RestClientOptions;
  private grpcClient: RestServiceClient;

  constructor(options: RestClientOptions) {
    this.options = options;
    this.initializeGrpcClient();
  }

  private initializeGrpcClient() {
    const packageDefinition = loadSync(
      join(__dirname, "./proto/nescord-rest.proto")
    );
    const proto = grpc.loadPackageDefinition(
      packageDefinition
    ) as unknown as ProtoGrpcType;

    this.grpcClient = new proto.nescordRestClient.RestService(
      this.options.gRPCHost,
      grpc.credentials.createInsecure()
    ) as unknown as RestServiceClient;
  }

  async test() {
    return this.grpcClient.call({ body: "bye" }, (err, data) => {
      if (err) {
        console.log(err);
      }

      console.log(data);
    });
  }
}
