/**Rest Handler */
export * from './modules/rest/rest-handler';

/**Rest Listener */
export * from './modules/rest/rest-listener';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RestListener } from './modules/rest/rest-listener';
import { GlobalConfig } from './config/global.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(GlobalConfig.get('grpcHost'));
  // const grpcConfig = app.get<RestListener>(RestListener).getGrpcClientConfig();

  // if (grpcConfig) {
  //   app.connectMicroservice(grpcConfig);

  //   await app.startAllMicroservices();
  // }
}

bootstrap();
