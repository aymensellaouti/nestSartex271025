import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { CustomFilter } from './common/filter/custom.filter';
import { DurationInterceptor } from './common/interceptors/duration.interceptor';
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
  app.useGlobalInterceptors(new DurationInterceptor())
  app.enableVersioning({
    type: VersioningType.URI
  })
  //app.useGlobalFilters(new CustomFilter())
  await app.listen(3000);
}
bootstrap();
