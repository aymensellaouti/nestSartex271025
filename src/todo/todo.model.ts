
export enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
}


export class TodoModel {
   
    constructor(
        private id = 0,
        public name = '',
        public description = '',
        public createdAt = new Date(),
        public status = TodoStatusEnum.waiting
    ) {
      
    }
}