import { Global, Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { LoggerService } from './logger.service';
import { SayHelloService } from './sayHello.service';
import { UtilsService } from './utils/utils.service';

@Global()
@Module({
  controllers: [CommonController],
  providers: [LoggerService, SayHelloService, UtilsService],
  exports: [LoggerService,SayHelloService]
})
export class CommonModule {}
