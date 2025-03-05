import {
  GrpcMethod,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';
import { RestListenerOptions } from './interface/rest-listener.interface';
import { join } from 'path';
import { GlobalConfig } from '../../config/global.config';

export class RestListener {
  private options: RestListenerOptions;
  public grpcConfig: MicroserviceOptions;

  constructor(options: RestListenerOptions) {
    this.options = options;
    this.initializeGrpcClient();
  }

  private initializeGrpcClient() {
    this.grpcConfig = {
      transport: Transport.GRPC,
      options: {
        package: 'nescordRestClient',
        protoPath: join(__dirname, '../../proto/nescord-rest-client.proto'),
        url: this.options.gRPCHost,
      },
    };

    GlobalConfig.set('grpcHost', this.grpcConfig);
    console.log(GlobalConfig.get('grpcHost'));
  }

  getGrpcClientConfig() {
    return this.grpcConfig;
  }

  @GrpcMethod('RestService', 'call')
  async call(message: any) {
    console.log(message);
  }
}
