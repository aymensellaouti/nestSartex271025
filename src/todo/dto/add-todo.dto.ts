import { IsNotEmpty } from "class-validator";

export class AddTodoDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty({
        message: 'Le champ $property est obligatoire'
    })
    description: string;
}