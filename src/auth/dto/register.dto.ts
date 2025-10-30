import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
  @IsString()
  username: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(4)
  password: string;
}
