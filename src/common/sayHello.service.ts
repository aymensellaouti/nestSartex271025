import { Injectable } from "@nestjs/common";
import { LoggerService } from "./logger.service";

@Injectable()
export class SayHelloService {

    constructor(
        private loggerService: LoggerService
        ) {}
    hello(): void {
        this.loggerService.log('Hello :D');
        console.log('Hello :D');
    }
}