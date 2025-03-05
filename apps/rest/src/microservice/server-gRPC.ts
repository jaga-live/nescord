import * as grpc from '@grpc/grpc-js';
import { ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

/**Nescord gRPC client config */
export const nescordGrpcConfig: ClientsModuleOptions = [
  {
    name: 'nescord_grpc',
    transport: Transport.GRPC,
    options: {
      package: 'nescord',
      protoPath: join(__dirname, '../proto/nescord.proto'),
      url: process.env.FLANTIC_GRPC_URL,
      credentials: grpc.credentials.createInsecure(),
    },
  },
];
