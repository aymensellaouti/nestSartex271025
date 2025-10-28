import { Controller, Get } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { SayHelloService } from './sayHello.service';

@Controller('common')
export class CommonController {
    constructor(
        private logger: LoggerService,
        private sayHelloService: SayHelloService,
    ) {}

    @Get()
    testLogger() {
        this.logger.log('Hello Sartex');
        return 'Testing Logger';
    }
    @Get('hello')
    hello() {
        this.sayHelloService.hello()
        return 'Testing Hello';
    }
}
