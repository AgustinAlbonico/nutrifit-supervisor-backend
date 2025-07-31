import { Module } from '@nestjs/common';
import { AuthModule } from 'src/application/auth/auth.module';
import { ProfesionalController } from './profesional.controller';
import { AppLoggerModule } from 'src/infrastructure/common/logger/app-logger.module';

@Module({
  imports: [AuthModule, AppLoggerModule],
  controllers: [ProfesionalController],
})
export class AuthControllerModule {}
