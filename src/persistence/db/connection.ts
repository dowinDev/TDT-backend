'use strict';

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { models } from '../entity';
import { databaseConfig } from '../../config/db.config';

dotenv.config();

// Kiểm tra môi trường hiện tại
const environment = process.env.NODE_ENV;
const currentConfig = databaseConfig[environment];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: currentConfig.dialect,
      host: currentConfig.host,
      port: currentConfig.port,
      username: currentConfig.user,
      password: currentConfig.password,
      database: currentConfig.database,
      autoLoadModels: true,
      synchronize: true, // Chỉ nên bật trong môi trường phát triển
    }),
    SequelizeModule.forFeature(models),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
