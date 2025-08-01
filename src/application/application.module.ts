import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProfesionalesModule } from './profesionales/profesionales.module';
import { AgendaModule } from './agenda/agenda.module';
import { SociosModule } from './socios/socios.module';
import { TurnosModule } from './turnos/turnos.module';

@Module({
  imports: [
    AuthModule,
    ProfesionalesModule,
    AgendaModule,
    SociosModule,
    TurnosModule,
  ],
  providers: [
    AuthModule,
    ProfesionalesModule,
    AgendaModule,
    SociosModule,
    TurnosModule,
  ],
})
export class ApplicationModule {}
