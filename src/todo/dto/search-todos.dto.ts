import { IsEnum, IsOptional, IsString } from "class-validator";
import { TodoStatusEnum } from "../todo.model";

export class SearchTodoDto {
    @IsOptional()
    @IsString()
    search: string;

    @IsOptional()
    @IsEnum(TodoStatusEnum)
    status: TodoStatusEnum;
}