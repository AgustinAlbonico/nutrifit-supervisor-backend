import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AgendaOrmEntity,
  DiaSemanaOrmEntity,
} from './persistence/typeorm/entities/agenda.entity';
import { AlimentoOrmEntity } from './persistence/typeorm/entities/alimento.entity';
import {
  AlergiaOrmEntity,
  FichaSaludOrmEntity,
  PatologiaOrmEntity,
} from './persistence/typeorm/entities/ficha-salud.entity';
import { FormacionAcademicaOrmEntity } from './persistence/typeorm/entities/formacion-academica.entity';
import { GeneroOrmEntity } from './persistence/typeorm/entities/genero.entity';
import { GrupoAlimenticioOrmEntity } from './persistence/typeorm/entities/grupo-alimenticio.entity';
import { NivelActividadFisicaOrmEntity } from './persistence/typeorm/entities/nivel-actividad-fisica.entity';
import { ObservacionClinicaOrmEntity } from './persistence/typeorm/entities/observacion-clinica.entity';
import { OpcionComidaOrmEntity } from './persistence/typeorm/entities/opcion-comida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AgendaOrmEntity, DiaSemanaOrmEntity])],
  providers: [
    {
      provide: 'AgendaRepository',
      useClass: AgendaOrmEntity,
    },
    {
      provide: 'DiaSemanaRepository',
      useClass: DiaSemanaOrmEntity,
    },
    {
      provide: 'AlimentoRepository',
      useClass: AlimentoOrmEntity,
    },
    {
      provide: 'AlergiaRepository',
      useClass: AlergiaOrmEntity,
    },
    {
      provide: 'PatologiaRepository',
      useClass: PatologiaOrmEntity,
    },
    {
      provide: 'FichaSaludRepository',
      useClass: FichaSaludOrmEntity,
    },
    {
      provide: 'FormacionAcademicaRepository',
      useClass: FormacionAcademicaOrmEntity,
    },
    {
      provide: 'GeneroRepository',
      useClass: GeneroOrmEntity,
    },
    {
      provide: 'GrupoAlimenticioRepository',
      useClass: GrupoAlimenticioOrmEntity,
    },
    {
      provide: 'NivelActividadFisicaRepository',
      useClass: NivelActividadFisicaOrmEntity,
    },
    {
      provide: 'ObservacionClinicaRepository',
      useClass: ObservacionClinicaOrmEntity,
    },
    {
      provide: 'OpcionComidaRepository',
      useClass: OpcionComidaOrmEntity,
    },
  ],
  exports: [
    'AgendaRepository',
    'DiaSemanaRepository',
    'AlimentoRepository',
    'AlergiaRepository',
    'PatologiaRepository',
    'FichaSaludRepository',
    'FormacionAcademicaRepository',
    'GeneroRepository',
    'GrupoAlimenticioRepository',
    'NivelActividadFisicaRepository',
    'ObservacionClinicaRepository',
    'OpcionComidaRepository',
  ],
})
export class InfrastructureModule {}
