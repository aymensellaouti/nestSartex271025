import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoModel } from './todo.model';

import { LoggerService } from '../common/logger.service';
import { TOKEN_PROVIDERS } from '../config/token-provider.config';
import { Repository } from 'typeorm';
import { TodoEntity } from './entity/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddTodoDbDto } from './dto/add-todo-db.dto';
import { UpdateTodoDbDto } from './dto/update-todo-db.dto';
@Injectable()
export class TodoDbService {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepository: Repository<TodoEntity>
    ) { }
    
    getTodos(): TodoModel[] {
       return []
    }

    getTestTodos(id: string): TodoModel {
        return this.findTodoById(id);
    }

    /**
     * delete Todo en utilisant l'id
     * @param id : l'id du todo à supprimer
     * @returns 
     */
    deleteTodo(id: string, userId: string): { count: number } {
        return { count: 1 };
    }

    addTodo(
        addTodoDto: AddTodoDbDto,
    ): Promise<TodoEntity> {
       return this.todoRepository.save(addTodoDto);
    }

    updateTodo(
        id: string,
        updateTodoDto: UpdateTodoDbDto,
    ): TodoModel {
        const todoTodoUpdate = this.findTodoById(id);
        return todoTodoUpdate;
    }

    findTodoById(id: string): TodoModel {
        const todo = [].find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException('Todo innexistant');
        return todo;
    }
}
