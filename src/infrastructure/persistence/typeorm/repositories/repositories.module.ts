import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from 'src/infrastructure/config/typeorm/typeorm.module';
import {
  UsuarioRepositoryImplementation,
  SocioRepositoryImplementation,
} from './';
import {
  SocioOrmEntity,
  AgendaOrmEntity,
  AlergiaOrmEntity,
  AlimentoOrmEntity,
  AsistenteOrmEntity,
  FichaSaludOrmEntity,
  FormacionAcademicaOrmEntity,
  GrupoAlimenticioOrmEntity,
  NutricionistaOrmEntity,
  ObservacionClinicaOrmEntity,
  OpcionComidaOrmEntity,
  PatologiaOrmEntity,
  PersonaOrmEntity,
  PlanAlimentacionOrmEntity,
  TurnoOrmEntity,
  UsuarioOrmEntity,
} from '../entities/';
import { SOCIO_REPOSITORY } from 'src/domain/entities/Persona/Socio/socio.repository';
import { USUARIO_REPOSITORY } from 'src/domain/entities/Usuario/usuario.repository';

// This module is responsible for providing TypeORM repositories for the application.
// It imports the TypeOrmConfigModule for database configuration and registers the necessary entities.
// Ahora agrego a cada cu los repositorios y entidades que necesito en vez de usar.
@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([
      SocioOrmEntity,
      AgendaOrmEntity,
      AlergiaOrmEntity,
      AlimentoOrmEntity,
      AsistenteOrmEntity,
      FichaSaludOrmEntity,
      FormacionAcademicaOrmEntity,
      GrupoAlimenticioOrmEntity,
      NutricionistaOrmEntity,
      ObservacionClinicaOrmEntity,
      OpcionComidaOrmEntity,
      PatologiaOrmEntity,
      PersonaOrmEntity,
      PlanAlimentacionOrmEntity,
      TurnoOrmEntity,
      UsuarioOrmEntity,
    ]),
  ],
  providers: [
    { provide: USUARIO_REPOSITORY, useClass: UsuarioRepositoryImplementation },
    { provide: SOCIO_REPOSITORY, useClass: SocioRepositoryImplementation },
  ],
  exports: [USUARIO_REPOSITORY, SOCIO_REPOSITORY],
})
export class RepositoriesModule {}
