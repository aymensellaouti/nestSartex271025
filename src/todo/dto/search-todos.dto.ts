import { IsDate, IsEnum, IsOptional, IsString } from "class-validator";
import { TodoStatusEnum } from "../todo.model";
import { PaginationDTO } from "../../common/dto/pagination.dto";
import { IntersectionType } from "@nestjs/mapped-types";
import { DateIntervalDto } from "../../common/dto/date-interval.dto";

export class SearchTodoDto extends IntersectionType(PaginationDTO, DateIntervalDto) {
    @IsOptional()
    @IsString()
    search: string;

    @IsOptional()
    @IsEnum(TodoStatusEnum)
    status: TodoStatusEnum;

}