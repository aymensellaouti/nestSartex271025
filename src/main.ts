import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomFilter } from './common/filter/custom.filter';
var morgan = require('morgan')
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }));
  app.use(morgan('dev'));
  app.enableCors({
    origin: ['http://localhost:4200']
  });
  //app.useGlobalFilters(new CustomFilter())
  await app.listen(3000);
}
bootstrap();
