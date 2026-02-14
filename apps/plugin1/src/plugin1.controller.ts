import { Body, Controller, Get, Post } from '@nestjs/common';
import { Plugin1Service } from './plugin1.service';

@Controller('plugin1')
export class Plugin1Controller {
  constructor(private readonly plugin1Service: Plugin1Service) {}

  @Post('process')
  async processMessage(@Body() payload: any): Promise<string> {
    await this.plugin1Service.processMessage(payload);
    return 'Message processed successfully';
  }
}