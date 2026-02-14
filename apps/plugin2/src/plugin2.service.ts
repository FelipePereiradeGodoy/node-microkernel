import { Injectable } from '@nestjs/common';

@Injectable()
export class Plugin2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
