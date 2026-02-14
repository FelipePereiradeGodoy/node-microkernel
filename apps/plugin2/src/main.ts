import { NestFactory } from '@nestjs/core';
import { Plugin2Module } from './plugin2.module';

async function bootstrap() {
  const app = await NestFactory.create(Plugin2Module);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
