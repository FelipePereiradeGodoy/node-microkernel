import { Module } from '@nestjs/common';
import { Plugin1Controller } from './plugin1.controller';
import { Plugin1Service } from './plugin1.service';
import { KafkaConsumer } from './kafka.consumer';

@Module({
  imports: [],
  controllers: [Plugin1Controller],
  providers: [Plugin1Service, KafkaConsumer],
  exports: [KafkaConsumer]
})
export class Plugin1Module {}
