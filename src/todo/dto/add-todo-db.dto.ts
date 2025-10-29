import { IsNotEmpty, IsNumber, MaxLength, MinLength } from "class-validator";
import { ERROR_MESSAGES } from "../../config/error-messages.config";
import { Type } from "class-transformer";

export class AddTodoDbDto {
    @IsNotEmpty()
    @MinLength(3, {
        message: ERROR_MESSAGES.dto.minLength
    }) 
    @MaxLength(15, {
        message: ERROR_MESSAGES.dto.maxLength
    })
    name: string;
    @IsNotEmpty({
        message: ERROR_MESSAGES.dto.mandatory,
    })
    @IsNotEmpty()
    @MinLength(10, {
        message: ERROR_MESSAGES.dto.minLength
    }) 
    description: string;
}