import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { CONSTANTES } from '../../../config/constantes.config';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // verify()
    // ngeti el token
    const jwtToken = req.get('auth-user') ?? ''; 
    // Kan mech maoujoud -> error
    if (jwtToken) {
    // KAn MAoujoud
    //   Nvérifih 
    let jwt: string | JwtPayload = '';
    try {
      jwt = verify(jwtToken, CONSTANTES.secret);
      console.log({jwt});
    } catch {
      //     ncatchi error kan fama
      throw new UnauthorizedException('Veuillez vous identifier 1!!');
    }
    //     sinon nrécupéri el id ou nzidou fel request Header
    const userId = jwt['userId'] ?? '';
    //     KAn ma famech nthrowi error
    if (!userId) {
      throw new UnauthorizedException('Veuillez vous identifier 2!!');
    } else {
      req['userId'] = userId;
    }
    } else {
      throw new UnauthorizedException('Veuillez vous identifier 3!!');
    }
    console.log('Working');
    next();
  }
}
