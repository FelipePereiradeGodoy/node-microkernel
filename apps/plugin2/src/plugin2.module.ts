import { Module } from '@nestjs/common';
import { Plugin2Controller } from './plugin2.controller';
import { Plugin2Service } from './plugin2.service';

@Module({
  imports: [],
  controllers: [Plugin2Controller],
  providers: [Plugin2Service],
})
export class Plugin2Module {}
