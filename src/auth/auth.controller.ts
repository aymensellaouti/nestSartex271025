import { Body, Controller, Post, Res } from '@nestjs/common';

import { LoginDto } from './dto/login-dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
 @Post('register')
  register(@Body() registerDto: RegisterDto): Promise<User> {
    return this.authService.register(registerDto);
  }
  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() loginDto: LoginDto,
  ) /* : Promise<{ jwt: string }> */ {
   return await this.authService.login(loginDto);
  }
}
