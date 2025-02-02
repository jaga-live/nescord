import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

/**gRPC client config */
export const grpcConfig: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'nescord',
    protoPath: join(__dirname, '../../../proto/nescord.proto'),
    url: process.env.NESCORD_GRPC_URL,
  },
};
