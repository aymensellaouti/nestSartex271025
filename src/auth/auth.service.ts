import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { LoginDto } from './dto/login-dto';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }
    register(registerDto: RegisterDto) {
        return this.userService.create(registerDto);
    }

    async login(loginDto: LoginDto): Promise<{ jwt: string }> {
        const { password, username } = loginDto;
        // find User with username or email
        const user = await this.userService.findByUserNameOrEmail(username);
        if (!user) {
            throw new UnauthorizedException('Veuillez vérifier vos credentials');
        }
        // If exist verify the password
        const isLoggedIn = await compare(password, user.password);
        if (!isLoggedIn) {
            throw new UnauthorizedException('Veuillez vérifier vos credentials');
        }
        delete user.password;
        const jwtPayload: JwtPayloadDto = {
            username: user.username,
            email: user.email,
            // role: user.role,
        };
        return { jwt: this.jwtService.sign(jwtPayload) };
        //return the user without the password
        /*     delete user.password;
        return user;
     */
    }
}
