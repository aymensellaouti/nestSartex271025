import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseFilters, UseInterceptors } from '@nestjs/common';
import { TodoModel } from './todo.model';

import { TodoControllerInterface } from './todo-controller.interface';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { Request } from 'express';
import { CustomFilter } from '../common/filter/custom.filter';
import { ReponseFormaterInterceptor } from '../common/interceptors/reponse-formater/reponse-formater.interceptor';
@Controller('todo')
@UseInterceptors(ReponseFormaterInterceptor)
//@UseFilters(CustomFilter)
export class TodoController implements TodoControllerInterface {
    constructor(private todoService: TodoService) {}
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
    @Req() request: Request): {count: number} {
        const userId = request['userId'];
        return this.todoService.deleteTodo(id, userId);    
    }    
    @Post()
    addTodo(
        @Body() addTodoDto: AddTodoDto,
        @Req() request: Request
    ): TodoModel {
        //console.log({addTodoDto});
        const userId = request['userId'];
       // console.log(addTodoDto instanceof AddTodoDto)
        return this.todoService.addTodo(addTodoDto, userId);
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
