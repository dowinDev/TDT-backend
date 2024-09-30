import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { serverConfig } from './config/sv.config';
import { AppModule } from './persistence/db/connection';
import { AppController } from './controllers/app.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  // config CORS
  const host = serverConfig.server.host;
  const port = serverConfig.server.port;
  const corsOptions = {
    origin: `https://${host}:${port}`,
  };

  app.use(cors(corsOptions));

  // Middleware
  app.use(bodyParser.json());
  app.use(cookieParser());

  //routes
  app.use('/api', AppController);

  // connect to the database and listen for requests
  try {
    await app.init();
    await app.listen(port);
    logger.log(`Server is running on https://${host}:${port}`);
  } catch (err) {
    logger.error('Unable to connect to the database:', err);
  }
}

bootstrap().then(() => console.log('Server is running'));
