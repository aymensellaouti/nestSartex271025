import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoModel } from './todo.model';

import { TodoControllerInterface } from './todo-controller.interface';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
@Controller('todo')
export class TodoController implements TodoControllerInterface {
    constructor(private todoService: TodoService) {}
    @Get('')
    getTodos(): TodoModel[] {
        return this.todoService.getTodos();
    }
    @Get(':id')
    getTestTodos(@Param('id') id: string): TodoModel {
        return this.todoService.getTestTodos(id);
    } 
    @Delete(':id')
    deleteTodo(@Param('id') id: string): {count: number} {
        return this.todoService.deleteTodo(id);    
    }    
    @Post()
    addTodo(
        @Body() addTodoDto: AddTodoDto
    ): TodoModel {
        return this.todoService.addTodo(addTodoDto);
    }
    @Patch(':id')
    updateTodo(
        // Jibli el Body el kol
        @Body() updateTodoDto: UpdateTodoDto,
        // Jibli el paramétre eli esmou id
        @Param('id') id: string
    ): TodoModel {
       return this.todoService.updateTodo(id,updateTodoDto);
    }
}
