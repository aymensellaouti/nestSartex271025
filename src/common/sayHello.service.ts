import { Inject, Injectable } from "@nestjs/common";
import { LoggerService } from "./logger.service";
import { TOKEN_PROVIDERS } from "../config/token-provider.config";

@Injectable()
export class SayHelloService {

    constructor(
        private loggerService: LoggerService,
        @Inject(TOKEN_PROVIDERS.langConfig) private config: {lang: string, langAbrev: string}
    ) {}
    hello(): void {
        if (this.config.lang == 'en')
            this.loggerService.log('Hello :D');
        else if (this.config.lang == 'fr')
            this.loggerService.log('Bonjour :D');
        else 
            this.loggerService.log('Salam :D');
    }
}