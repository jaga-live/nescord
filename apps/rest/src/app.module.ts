import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { nescordGrpcConfig } from './microservice/server-gRPC';
import { RestListener } from './modules/rest/rest-listener';

@Module({
  imports: [ClientsModule.register(nescordGrpcConfig)],
})
export class AppModule {}
