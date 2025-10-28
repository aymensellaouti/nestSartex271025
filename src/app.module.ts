import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import { FirstMiddleware } from './common/middleware/first/first.middleware';

@Module({
  // Eli nest7a9ou 
  imports: [FirstModule, SecondModule, TodoModule, CommonModule],
  // 
  controllers: [AppController],
  // Taw nchoufou
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware)
    .forRoutes(TodoController);
  }
}
