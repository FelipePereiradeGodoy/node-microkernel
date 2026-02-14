import { Controller, Get } from '@nestjs/common';
import { Plugin2Service } from './plugin2.service';

@Controller()
export class Plugin2Controller {
  constructor(private readonly plugin2Service: Plugin2Service) {}

  @Get()
  getHello(): string {
    return this.plugin2Service.getHello();
  }
}
