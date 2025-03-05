import * as grpc from '@grpc/grpc-js';
import { ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

/**Nescord Rest gRPC client config */
export const restClientGrpcConfig: ClientsModuleOptions = [
  {
    name: 'nescord_rest_client_grpc',
    transport: Transport.GRPC,
    options: {
      package: 'nescordRest',
      protoPath: join(__dirname, '../proto/nescord-rest.proto'),
      url: '0.0.0.0:5001',
      credentials: grpc.credentials.createInsecure(),
    },
  },
];
