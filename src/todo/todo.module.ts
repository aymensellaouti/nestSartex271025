import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entity/todo.entity';
import { TodoDbController } from './todo-db.controller';
import { TodoDbService } from './todo-db.service';

@Module({
    controllers: [TodoController, TodoDbController],
    providers: [TodoService, TodoDbService],
    imports: [
        TypeOrmModule.forFeature([TodoEntity])
    ]
})
export class TodoModule {
    
}
