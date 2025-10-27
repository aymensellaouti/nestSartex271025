import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  @Get('hello')
  getHello(): string {
    return 'Hello Sartex :D';
  }
}
