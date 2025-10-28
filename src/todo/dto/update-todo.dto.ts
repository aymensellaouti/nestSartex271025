import { IsEnum, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { TodoStatusEnum } from "../todo.model";
import { ERROR_MESSAGES } from "../../config/error-messages.config";

export class UpdateTodoDto {
        @IsOptional()
        @MinLength(3, {
            message: ERROR_MESSAGES.dto.minLength
        }) 
        @MaxLength(15, {
            message: ERROR_MESSAGES.dto.maxLength
        })
        name: string;
        @IsOptional({
            message: ERROR_MESSAGES.dto.mandatory,
        })
        @IsNotEmpty()
        @MinLength(10, {
            message: ERROR_MESSAGES.dto.minLength
        }) 
        description: string;
        @IsOptional()
        @IsEnum(TodoStatusEnum)
        status: TodoStatusEnum;
}