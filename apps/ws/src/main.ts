import { NestFactory } from '@nestjs/core';
import { WsModule } from './ws.module';

async function bootstrap() {
  const app = await NestFactory.create(WsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
