import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoModel } from './todo.model';

import { LoggerService } from '../common/logger.service';
import { TOKEN_PROVIDERS } from '../config/token-provider.config';
@Injectable()
export class TodoService {
    constructor(
        private logger: LoggerService,
        @Inject(TOKEN_PROVIDERS.uuid) private  uuid: () => string
    ) { }
    private todos = [
        //new TodoModel(uuidv4(), "NestJS", "faire l'exercice")
    ];

    getTodos(): TodoModel[] {
        this.logger.log('Getting Todos');
        return this.todos;
    }

    getTestTodos(id: string): TodoModel {
        return this.findTodoById(id);
    }

    deleteTodo(id: string): { count: number } {
        const index = this.todos.findIndex((todo) => todo.id == id);
        if (index == -1) return { count: 0 };
        this.todos.splice(index, 1)
        return { count: 1 };
    }

    addTodo(
        addTodoDto: AddTodoDto
    ): TodoModel {
        const { name, description, priority } = addTodoDto;
        const newTod = new TodoModel(this.uuid(), name, description, priority)
        this.todos.push(newTod);
        return newTod;
    }

    updateTodo(
        id: string,
        updateTodoDto: UpdateTodoDto,
    ): TodoModel {

        const { name, description, status } = updateTodoDto;
        const todoTodoUpdate = this.findTodoById(id);
        console.log({ todoTodoUpdate });
        todoTodoUpdate.name = name ?? todoTodoUpdate.name;
        todoTodoUpdate.description = description ?? todoTodoUpdate.description;
        todoTodoUpdate.status = status ?? todoTodoUpdate.status;

        return todoTodoUpdate;
    }

    findTodoById(id: string): TodoModel {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) throw new NotFoundException('Todo innexistant');
        return todo;
    }
}
