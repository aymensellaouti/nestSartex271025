import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { randEmail } from '@ngneat/falso';
async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // Todo :  Do What you want
  console.log("SEED DB" + randEmail());
  
  await app.close();
}
bootstrap();
