import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class DurationInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        //throw new Error("Method not implemented.");
        // Code hadha 9abl el resopnse
        const start = new Date().getTime();
        return next.handle().pipe(
            tap( response => {
                const end = new Date().getTime();
                console.log(`It takes : ${end - start} ms`);
                // code ba3d ma tjina el response
            })
        );
    }
}