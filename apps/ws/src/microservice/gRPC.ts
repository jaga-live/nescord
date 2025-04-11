import { EventsServiceClient } from '../proto/ws/EventsService';
import { join } from 'path';
import { loadSync } from '@grpc/proto-loader';
import * as grpc from '@grpc/grpc-js';
import { ProtoGrpcType } from '../proto/ws';
import { WsClientOptions } from '../interface/ws-client-options.interface';

export class GrpcClient {
  private static instance: GrpcClient;
  private grpcClient: EventsServiceClient;

  private constructor(options: WsClientOptions) {
    this.grpcClient = this.set(options);
  }

  set(options: WsClientOptions) {
    const packageDefinition = loadSync(join(__dirname, '../proto/ws.proto'));
    const proto = grpc.loadPackageDefinition(
      packageDefinition,
    ) as unknown as ProtoGrpcType;

    this.grpcClient = new proto.ws.EventsService(
      options.gRPCHost,
      grpc.credentials.createInsecure(),
    ) as unknown as EventsServiceClient;

    return this.grpcClient;
  }

  public static getInstance(options: WsClientOptions): GrpcClient {
    if (!GrpcClient.instance) {
      GrpcClient.instance = new GrpcClient(options);
    }

    return GrpcClient.instance;
  }
}
