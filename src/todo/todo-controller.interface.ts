import { TodoModel } from "./todo.model";

export interface TodoControllerInterface {
    
    getTodos(): TodoModel[]
}