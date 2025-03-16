import { RestClientOptions } from "../interface/rest-client.interface";
import { RestServiceClient } from "../proto/nescordRestClient/RestService";
import { join } from "path";
import { loadSync } from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import { ProtoGrpcType } from "../proto/nescord-rest";

export class GrpcClient {
    private grpcClient: RestServiceClient;

    set(options: RestClientOptions) {
        const packageDefinition = loadSync(
            join(__dirname, "../proto/nescord-rest.proto")
        );
        const proto = grpc.loadPackageDefinition(
            packageDefinition
        ) as unknown as ProtoGrpcType;

        this.grpcClient = new proto.nescordRestClient.RestService(
            options.gRPCHost,
            grpc.credentials.createInsecure()
        ) as unknown as RestServiceClient;

        return this.grpcClient;
    }

    async get() {
        return this.grpcClient;
    }
}