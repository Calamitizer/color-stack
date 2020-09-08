import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import MainModule from '@server/main.module';

(async () => {
  const app = await NestFactory.createApplicationContext(MainModule, {
    // logger: false, // no logger
  });
  app.select(CommandModule).get(CommandService).exec();
})();
