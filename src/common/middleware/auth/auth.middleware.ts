import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtPayload, verify } from 'jsonwebtoken';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    //verify()
    // ngeti el token

    // Kan mech maoujoud -> error
    // KAn MAoujoud
      // Nvérifih 
        // ncatchi error kan fama
        // sinon nrécupéri el id ou nzidou fel request Header
        // KAn ma famech nthrowi error
    next();
  }
}
