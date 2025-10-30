import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { TodoModel } from './todo.model';

import { Request } from 'express';
import { TodoDbService } from './todo-db.service';
import { TodoEntity } from './entity/todo.entity';
import { AddTodoDbDto } from './dto/add-todo-db.dto';
import { UpdateTodoDbDto } from './dto/update-todo-db.dto';
import { SearchTodoDto } from './dto/search-todos.dto';
@Controller({
    path: 'todo',
    version: '2'
})
//@UseInterceptors(ReponseFormaterInterceptor)
//@UseFilters(CustomFilter)
export class TodoDbController {
    constructor(
        private todoDbService: TodoDbService
    ) {}
    // To update using DB
    @Get('')
    //@UseFilters(CustomFilter)
    getTodos(
        @Query() searchTodoDto: SearchTodoDto
    ): Promise<TodoEntity[]> {
        return this.todoDbService.getTodosQB(searchTodoDto);
    }
    // To update using DB    
    @Get(':id')
    getTodoById(@Param('id') id: string): Promise<TodoEntity> {
        return this.todoDbService.findTodoById(id);
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
