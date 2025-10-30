import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // Todo :  Do What you want
  console.log("SEED DB");
  
  await app.close();
}
bootstrap();
