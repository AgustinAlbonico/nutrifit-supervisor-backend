import { Module } from '@nestjs/common';
import {
  AuthController,
  ProfesionalController,
  SocioController,
} from './controllers';
import { ApplicationModule } from 'src/application/application.module';
import { AppLoggerModule } from 'src/infrastructure/common/logger/app-logger.module';

@Module({
  imports: [ApplicationModule, AppLoggerModule],
  providers: [],
  controllers: [AuthController, SocioController, ProfesionalController],
})
export class ControllersModule {}
