import { Module } from '@nestjs/common';
import { AuthModule } from 'src/application/auth/auth.module';
import { ProfesionalController } from './profesional.controller';
import { GestionProfesionalesModule } from 'src/application/gestion de profesionales/gestion-profesionales.module';

@Module({
  imports: [AuthModule, GestionProfesionalesModule],
  controllers: [ProfesionalController],
})
export class AuthControllerModule {}
