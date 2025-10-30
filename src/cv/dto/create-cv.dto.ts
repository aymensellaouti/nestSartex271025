
import { Type } from "class-transformer";
import { IsString, IsNumber, IsOptional } from "class-validator";
import { User } from "../../user/entities/user.entity";

export class CreateCvDto {
  @IsString()
  name: string;
  @IsNumber()
  @Type(() => Number)
  age: number;
  @IsString()
  job: string;
  @IsString()
  @IsOptional()
  path: string;

  user: User;
}
