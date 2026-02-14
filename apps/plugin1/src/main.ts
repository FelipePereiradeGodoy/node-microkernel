import { NestFactory } from '@nestjs/core';
import { Plugin1Module } from './plugin1.module';

async function bootstrap() {
  const app = await NestFactory.create(Plugin1Module);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
