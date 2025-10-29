import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { map, Observable } from 'rxjs';

@Injectable()
export class ReponseFormaterInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // La partie request
    const request: Request = context.switchToHttp().getRequest();
    return next.handle().pipe(
      // la partie response
      map(response => ({
        ip: request.ip,
        data: response,
        createdAt: new Date()
      }))
    );
  }
}
