import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core.module';
import { grpcConfig } from './microservice/gRPC';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);

  app.connectMicroservice(grpcConfig);

  await app.startAllMicroservices();
}

bootstrap();
