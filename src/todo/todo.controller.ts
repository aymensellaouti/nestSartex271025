import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { TodoModel } from './todo.model';
import { v4 as uuidv4 } from 'uuid';
import { TodoControllerInterface } from './todo-controller.interface';
@Controller('todo')
export class TodoController implements TodoControllerInterface {
    private todos = [
        //new TodoModel(uuidv4(), "NestJS", "faire l'exercice")
    ];

    
    @Get('all')
    getTodos(): TodoModel[] {
        return this.todos;
    }

    @Get(':id')
    getTestTodos(@Param('id') id: string): TodoModel {
        return this.findTodoById(id);
    } 
    
    @Delete(':id')
    deleteTodo(@Param('id') id: string): {count: number} {
        const index = this.todos.findIndex((todo) => todo.id == id);
        if (index == -1) return {count: 0};
        this.todos.splice(index, 1)
        return {count: 1};
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

    @Patch(':id')
    updateTodo(
        @Body() todo: Partial<TodoModel>,
        @Param('id') id: string
    ): TodoModel {
        console.log({todo});
        const todoTodoUpdate = this.findTodoById(id);
        console.log({todoTodoUpdate});
        todoTodoUpdate.name = todo.name ?? todoTodoUpdate.name;
        todoTodoUpdate.description = todo.description ?? todoTodoUpdate.description;
        todoTodoUpdate.status = todo.status ?? todoTodoUpdate.status;

        return todoTodoUpdate;
    }

    findTodoById(id: string): TodoModel {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException('Todo innexistant');
        return todo;
    }
}
