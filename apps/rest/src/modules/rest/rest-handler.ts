import {
  ClientGrpc,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { RestHandlerOptions } from './interface/rest-handler.interface';
import { join } from 'path';
import { INescordRestService } from 'apps/rest/src/interface/nescord-rest.interface';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

export class RestHandler {
  private options: RestHandlerOptions;
  private grpcClient: ClientGrpc;
  private discordRest: INescordRestService;

  constructor(options: RestHandlerOptions) {
    this.options = options;
    this.initializeGrpcClient();
  }

  private initializeGrpcClient() {
    this.grpcClient = ClientProxyFactory.create({
      transport: Transport.GRPC,
      options: {
        package: 'nescordRestClient',
        protoPath: join(__dirname, '../../proto/nescord-rest-client.proto'),
        url: this.options.gRPCHost,
      },
    }) as ClientGrpc;

    this.discordRest =
      this.grpcClient.getService<INescordRestService>('RestService');
  }

  async test() {
    console.log(this.options);
    await lastValueFrom(
      this.discordRest.call({ method: 'GET', url: '', body: '' }),
    );
  }
}
