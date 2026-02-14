import { Body, Controller, Post } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller()
export class CoreController {
  constructor(private readonly appService: CoreService) {}

  @Post('start-process')
  async sendNotification(@Body() payload: any): Promise<void> {
    this.appService.sendNotification(payload);
  }
}
