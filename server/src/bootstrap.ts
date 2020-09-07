import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import 'reflect-metadata';
import env from '@shared/config/env.config';
import MainModule from '@server/main.module';

const bootstrap = async () => {
  const app = await NestFactory.create(MainModule);
  app.use(helmet());

  await app.listen(parseInt(env.PORT, 10));
};

bootstrap();
