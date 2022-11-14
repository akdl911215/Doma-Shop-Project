import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// NestJS는 Module > Controller > Service > Repository > Entity
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

