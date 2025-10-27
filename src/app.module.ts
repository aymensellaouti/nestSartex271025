import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';

@Module({
  // Eli nest7a9ou 
  imports: [FirstModule, SecondModule, TodoModule],
  // 
  controllers: [AppController],
  // Taw nchoufou
  providers: [AppService],
})
export class AppModule {}
