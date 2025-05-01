import { loadSync } from '@grpc/proto-loader';
import { WsListenerOptions } from './interface/ws-listener-options.interface';
import { join } from 'path';
import * as grpc from '@grpc/grpc-js';
import { ProtoGrpcType } from './proto/ws';
import { WsGrpcController } from './controllers/ws-grpc.controller';
import EventEmitter from 'events';

export class WsListener extends EventEmitter {
  private options: WsListenerOptions;

  constructor(options: WsListenerOptions) {
    super();

    this.options = options;
    this.initializeGrpcServer();
  }

  private async initializeGrpcServer() {
    const packageDefinition = loadSync(join(__dirname, './proto/ws.proto'));
    const proto = grpc.loadPackageDefinition(
      packageDefinition,
    ) as unknown as ProtoGrpcType;
    const grpcServer = new grpc.Server();
    const grpcController = new WsGrpcController(this.options, this);

    grpcServer.addService(proto.ws.EventsService.service, grpcController);

    grpcServer.bindAsync(
      this.options.gRPCHost,
      grpc.ServerCredentials.createInsecure(),
      (err) => {
        if (err) {
          console.error(err);

          return;
        }

        console.log(`gRPC server started on ${this.options.gRPCHost}`);
      },
    );
  }
}
