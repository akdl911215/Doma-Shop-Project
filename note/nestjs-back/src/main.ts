import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(9696, () => console.log('http://127.0.0.1:9696/docment'));
}
bootstrap().then((res) => console.log('bootstrap start'));
