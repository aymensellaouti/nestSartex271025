import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import { FirstMiddleware } from './common/middleware/first/first.middleware';
import { AuthMiddleware } from './common/middleware/auth/auth.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // Eli nest7a9ou 
  imports: [
    FirstModule, SecondModule, TodoModule,
    CommonModule,
    TypeOrmModule.forRoot({ 
      type: 'mysql', 
      host: 'localhost', port: 3306, 
      username: 'root', 
      password: '', 
      database: 'sartex', 
      entities: [], 
      synchronize: true, 
      logging: true
    })
  ],
  // 
  controllers: [AppController],
  // Taw nchoufou
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
      .forRoutes(
        //TodoController
        { path: 'todo*', method: RequestMethod.PATCH },
        { path: 'todo*', method: RequestMethod.POST },
        { path: 'todo*', method: RequestMethod.DELETE },
      );
  }
}
