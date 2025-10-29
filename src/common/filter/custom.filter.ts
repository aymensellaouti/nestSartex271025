import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export class CustomFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response: Response = ctx.getResponse();

        return response.status(exception.getStatus())
                .json({
                    createdAt: new Date(),
                    message: `Le message d'erreur est ${exception.message}`
                })
                .send();
        //throw new Error("Method not implemented.");
    }
}