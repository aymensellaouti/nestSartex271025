import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoModel } from './todo.model';

import { LoggerService } from '../common/logger.service';
import { TOKEN_PROVIDERS } from '../config/token-provider.config';
import { ILike, Repository } from 'typeorm';
import { TodoEntity } from './entity/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddTodoDbDto } from './dto/add-todo-db.dto';
import { UpdateTodoDbDto } from './dto/update-todo-db.dto';
import { SearchTodoDto } from './dto/search-todos.dto';
@Injectable()
export class TodoDbService {
    constructor(
        @InjectRepository(TodoEntity)
        private todoRepository: Repository<TodoEntity>
    ) { }
    
    /**
     * Retourne la liste des todos
     * @returns Promise<TodoEntity[]>
     */
    getTodos(searchTodoDto: SearchTodoDto): Promise<TodoEntity[]>  {
        const criterias = [];
        const {search, status} = searchTodoDto;
        if (search) {
            criterias.push({name: ILike(`%${search}%`)});
            criterias.push({description: ILike(`%${search}%`)});
        }
        if (status) {
            criterias.push({status});
        }
        if (criterias.length)
            return this.todoRepository.find({
                where: criterias
            })
        return this.todoRepository.find();
    }

    getTestTodos(id: string): TodoModel {
        return this.findTodoById(id);
    }


    /**
     * Ajoute un todo
     * @param addTodoDto 
     * @returns Promise<TodoEntity>
     */
    addTodo(
        addTodoDto: AddTodoDbDto,
    ): Promise<TodoEntity> {
       return this.todoRepository.save(addTodoDto);
    }


    /**
     * met à a jour un todo
     * @param id 
     * @param updateTodoDto 
     * @returns Promise<TodoEntity>
     */
    async updateTodo(
        id: string,
        updateTodoDto: UpdateTodoDbDto,
    ): Promise<TodoEntity> {
        const todo = await this.todoRepository.preload({id, ...updateTodoDto});
        if (!todo) throw new NotFoundException('Todo innexistant');
        return this.todoRepository.save(todo);
    }

        /**
     * delete Todo en utilisant l'id
     * @param id : l'id du todo à supprimer
     * @returns 
     */
    async deleteTodo(id: string): Promise<{ count: number }> {
        const result = await this.todoRepository.softDelete(id);
        if (result.affected == 0) throw new NotFoundException('Todo innexistant');
        return {count: result.affected};
    }

    /**
     * delete Todo en utilisant l'id
     * @param id : l'id du todo à supprimer
     * @returns 
     */
    async restoreTodo(id: string): Promise<{ count: number }> {
        const result = await this.todoRepository.restore(id);
        if (result.affected == 0) throw new NotFoundException('Todo innexistant');
        return {count: result.affected};
    }

    findTodoById(id: string): TodoModel {
        const todo = [].find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException('Todo innexistant');
        return todo;
    }
}
