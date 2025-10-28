
import { v4 as uuidv4 } from 'uuid';
export enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
}


export class TodoModel {
   
    constructor(
        private id = '',
        public name = '',
        public description = '',
        public priority = 0,
        public createdAt = new Date(),
        public status = TodoStatusEnum.waiting
    ) {
      
    }
}