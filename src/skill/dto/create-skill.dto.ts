import { MinLength } from "class-validator";
import { ERROR_MESSAGES } from "../../config/error-messages.config";

export class CreateSkillDto {
    @MinLength(10, {
        message: ERROR_MESSAGES.dto.minLength,
    })
    designation: string;
}
