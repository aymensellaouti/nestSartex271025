import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseFilters, UseInterceptors } from '@nestjs/common';
import { TodoModel } from './todo.model';

import { TodoControllerInterface } from './todo-controller.interface';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { Request } from 'express';
import { CustomFilter } from '../common/filter/custom.filter';
import { ReponseFormaterInterceptor } from '../common/interceptors/reponse-formater/reponse-formater.interceptor';
import { TodoDbService } from './todo-db.service';
import { TodoEntity } from './entity/todo.entity';
import { AddTodoDbDto } from './dto/add-todo-db.dto';
import { UpdateTodoDbDto } from './dto/update-todo-db.dto';
@Controller({
    path: 'todo',
    version: '2'
})
// @UseInterceptors(ReponseFormaterInterceptor)
//@UseFilters(CustomFilter)
export class TodoDbController implements TodoControllerInterface {
    constructor(
        private todoService: TodoService,
        private todoDbService: TodoDbService
    ) {}
    @Get('')
    //@UseFilters(CustomFilter)
    getTodos(): TodoModel[] {
        return this.todoService.getTodos();
    }
    @Get(':id')
    getTestTodos(@Param('id') id: string): TodoModel {
        return this.todoService.getTestTodos(id);
    } 
    @Delete(':id')
    deleteTodo(@Param('id') id: string,         
    @Req() request: Request): Promise<{count: number}> {
        return this.todoDbService.deleteTodo(id);    
    }     
    @Patch('restore/:id')
    restoreTodo(@Param('id') id: string): Promise<{count: number}> {
        return this.todoDbService.restoreTodo(id);    
    }    
    @Post()
    addTodo(
        @Body() addTodoDto: AddTodoDbDto,
    ): Promise<TodoEntity> {
        return this.todoDbService.addTodo(addTodoDto);
    }
    @Patch(':id')
    updateTodo(
        // Jibli el Body el kol
        @Body() updateTodoDto: UpdateTodoDbDto,
        // Jibli el paramétre eli esmou id
        @Param('id') id: string
    ): Promise<TodoEntity> {  
       return this.todoDbService.updateTodo(id,updateTodoDto);
    }
}
