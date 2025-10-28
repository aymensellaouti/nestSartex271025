import { Global, Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { LoggerService } from './logger.service';
import { SayHelloService } from './sayHello.service';
import { UtilsService } from './utils/utils.service';
import { TOKEN_PROVIDERS } from '../config/token-provider.config';
import { LANG_PROVIDER } from './providers/lang-config.provider';

@Global()
@Module({
  controllers: [CommonController],
  providers: [
    LoggerService,
    // {
    //     // esm plat fel menu howa LoggerService
    //     provide: LoggerService,
    //     // chneya el plat
    //     useClass: LoggerService
    // }, 
    LANG_PROVIDER,
    SayHelloService, 
    UtilsService],
  exports: [
    LoggerService,SayHelloService,
    LANG_PROVIDER
]
})
export class CommonModule {}
