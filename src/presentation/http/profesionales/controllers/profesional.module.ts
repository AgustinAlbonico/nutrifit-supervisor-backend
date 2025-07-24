import { Module } from '@nestjs/common';
import { AuthModule } from 'src/application/auth/auth.module';
import { ProfesionalController } from './profesional.controller';

@Module({
  imports: [AuthModule],
  controllers: [ProfesionalController],
})
export class AuthControllerModule {}
