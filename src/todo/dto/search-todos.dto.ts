import { IsEnum, IsOptional, IsString } from "class-validator";
import { TodoStatusEnum } from "../todo.model";
import { PaginationDTO } from "../../common/dto/pagination.dto";

export class SearchTodoDto extends PaginationDTO {
    @IsOptional()
    @IsString()
    search: string;

    @IsOptional()
    @IsEnum(TodoStatusEnum)
    status: TodoStatusEnum;
}