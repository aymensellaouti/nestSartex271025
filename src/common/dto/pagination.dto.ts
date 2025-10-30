import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, Max, Min } from "class-validator";

export class PaginationDTO {

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    page: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    @Max(30)
    numberPerPage: number;
}