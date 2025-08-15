import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { AppLoggerModule } from 'src/infrastructure/common/logger/app-logger.module';

import {
  AuthController,
  ProfesionalController,
  SocioController,
} from './controllers';
import { AuthModule } from 'src/application/auth/auth.module';

@Module({
  imports: [AppLoggerModule, ApplicationModule],
  providers: [],
  controllers: [ProfesionalController, SocioController, AuthController],
})
export class ControllersModule {}
