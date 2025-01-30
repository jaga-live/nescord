import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core.module';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
