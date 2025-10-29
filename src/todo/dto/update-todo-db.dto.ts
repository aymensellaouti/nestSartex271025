import { IsEnum, IsOptional } from "class-validator";
import { TodoStatusEnum } from "../todo.model";
import { PartialType } from "@nestjs/mapped-types";

import { AddTodoDbDto } from "./add-todo-db.dto";

export class UpdateTodoDbDto extends PartialType(AddTodoDbDto) {

        @IsOptional()
        @IsEnum(TodoStatusEnum)
        status: TodoStatusEnum;
}