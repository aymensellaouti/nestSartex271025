import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { SayHelloService } from './sayHello.service';
import { FusionPipe } from './pipes/fusion/fusion.pipe';

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
    @Post('skills')
    skills(
        @Body('skills', FusionPipe) skills
    ) {
        return skills;
    }
}
