import { Injectable } from "@nestjs/common";

@Injectable()
export class LoggerService {
    log(message: unknown): void {
        console.log('From Logger');
        console.log({message});   
    }
}