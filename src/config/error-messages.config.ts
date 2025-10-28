import { maxLength, minLength } from "class-validator";

export const ERROR_MESSAGES = {
    dto: {
        minLength: 'Le champ $property doit avoir une taille minimum de $constraint1',
        maxLength: 'Le champ $property doit avoir une taille maximale de $constraint1',
        mandatory: 'Le champ $property est obligatoire'
    }
}