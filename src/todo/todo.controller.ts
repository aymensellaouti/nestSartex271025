import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoModel } from './todo.model';
import { v4 as uuidv4 } from 'uuid';
@Controller('todo')
export class TodoController {
    private todos = [
        //new TodoModel(uuidv4(), "NestJS", "faire l'exercice")
    ];

    
    @Get('all')
    getTodos(): TodoModel[] {
        return this.todos;
    }

    @Get(':test')
    getTestTodos(@Param('test') param): string {
        return param;
    }    

    
    @Post()
    addTodo(
        @Body() todo
    ): TodoModel {
        const {name, description} = todo;
        const newTod =  new TodoModel(uuidv4(), name, description)
        this.todos.push(newTod);
        return newTod;
    }
}
