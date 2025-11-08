import { loadSync } from '@grpc/proto-loader';
import { join } from 'path';
import * as grpc from '@grpc/grpc-js';
import { ProtoGrpcType } from './proto/ws';
import { WsGrpcController } from './controllers/ws-grpc.controller';
import { WsListenerOptions } from './interface/ws-listener-options.interface';
import EventEmitter from 'events';

export class WsListener extends EventEmitter {
  private options: WsListenerOptions;
  private grpcServer: grpc.Server;

  constructor(options: WsListenerOptions) {
    super();
    this.options = options;
    this.grpcServer = new grpc.Server();

    // Start the gRPC server
    this.initializeGrpcServer().catch(console.error);
  }

  private async initializeGrpcServer(): Promise<void> {
    const packageDefinition = loadSync(join(__dirname, './proto/ws.proto'));
    const proto = grpc.loadPackageDefinition(
      packageDefinition,
    ) as unknown as ProtoGrpcType;

    const grpcController = new WsGrpcController(this);
    this.grpcServer.addService(proto.ws.EventsService.service, grpcController);

    await new Promise<void>((resolve, reject) => {
      this.grpcServer.bindAsync(
        this.options.gRPCHost,
        grpc.ServerCredentials.createInsecure(),
        (err) => {
          if (err) {
            reject(err);
          } else {
            console.log(`gRPC server started on ${this.options.gRPCHost}`);

            resolve();
          }
        },
      );
    });
  }

  async close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.grpcServer.tryShutdown((err) => {
        if (err) {
          reject(err);
        } else {
          console.log('gRPC server shut down gracefully');

          resolve();
        }
      });
    });
  }
}
