import { Controller, Get } from '@nestjs/common';
import { TodoModel } from './todo.model';
import { v4 as uuidv4 } from 'uuid';
@Controller('todo')
export class TodoController {
    private todos = [
        new TodoModel(1, "NestJS", "faire l'exercice")
    ];

    @Get()
    getTodos(): TodoModel[] {
        return this.todos;
    }
}
