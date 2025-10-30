import { Type } from "class-transformer";
import { IsOptional, IsDate } from "class-validator";

export class DateIntervalDto {
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    minDate: Date;
    
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    maxDate: Date;
}