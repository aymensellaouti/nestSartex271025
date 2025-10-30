import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { Injectable, UnauthorizedException } from '@nestjs/common';
;
import { Request } from 'express';
import { UserService } from '../user/user.service';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { CONSTANTES } from '../config/constantes.config';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      /* 
        fromAuthHeaderAsBearerToken()
      */
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
      // .fromExtractors([
      //   JwtStrategy.extractJWTFromCookie,
      // ])
      ,
      secretOrKey: CONSTANTES.secret,
    });
  }

  // private static extractJWTFromCookie(req: Request): string | null {
  //   console.log('extractJWTFromCookie');

  //   if (req.cookies && req.cookies.accessToken) {
  //     return req.cookies.accessToken;
  //   }
  //   return null;
  // }
  // La payloadInterface sert à typer votre code à vous de la créer selon votre payload
  async validate(payload: JwtPayloadDto) {
    // validate jwt ce qu'on retourne ici ca va etre injecté dans la requete
    const { email, username } = payload;
    console.log('in validate');
    const user = await this.userService.findByUserNameOrEmail(username); //find user ;
    if (!user) {
      throw new UnauthorizedException('Veuillez vous identifer');
    }
    delete user.password;
    return user;
  }
}
