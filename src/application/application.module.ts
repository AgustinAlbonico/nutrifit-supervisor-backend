import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GestionProfesionalesModule } from './gestion de profesionales/gestion-profesionales.module';

@Module({
  imports: [AuthModule, GestionProfesionalesModule],
  providers: [AuthModule, GestionProfesionalesModule],
})
export class ApplicationModule {}
