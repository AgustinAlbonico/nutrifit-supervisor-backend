import 'reflect-metadata';
import {
  AgendaOrmEntity,
  DiaSemanaOrmEntity,
} from 'src/infrastructure/persistence/typeorm/entities/agenda.entity';
import { AlimentoOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/alimento.entity';
import {
  AsistenteOrmEntity,
  DeportologoOrmEntity,
  NutricionistaOrmEntity,
  PersonaOrmEntity,
  ProfesionalOrmEntity,
  SocioOrmEntity,
} from 'src/infrastructure/persistence/typeorm/entities/persona.entity';
import {
  EstadoTurnoOrmEntity,
  TurnoOrmEntity,
} from 'src/infrastructure/persistence/typeorm/entities/turno.entity';
import { GeneroOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/genero.entity';
import {
  AlergiaOrmEntity,
  FichaSaludOrmEntity,
  PatologiaOrmEntity,
} from 'src/infrastructure/persistence/typeorm/entities/ficha-salud.entity';
import { UsuarioOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/usuario.entity';
import { TipoComidaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/tipo-comida.entity';
import { OpcionComidaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/opcion-comida.entity';
import { UnidadMedidaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/unidad-medida.entity';
import { GrupoAlimenticioOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/grupo-alimenticio.entity';
import { PlanAlimentacionOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/plan-alimentacion.entity';
import { FormacionAcademicaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/formacion-academica.entity';
import { ObservacionClinicaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/observacion-clinica.entity';
import { NivelActividadFisicaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/nivel-actividad-fisica.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const AppDataSource: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nutrifit_supervisor',
  entities: [
    AgendaOrmEntity,
    DiaSemanaOrmEntity,
    AlimentoOrmEntity,
    SocioOrmEntity,
    TurnoOrmEntity,
    GeneroOrmEntity,
    AlergiaOrmEntity,
    PersonaOrmEntity,
    UsuarioOrmEntity,
    AsistenteOrmEntity,
    PatologiaOrmEntity,
    FichaSaludOrmEntity,
    TipoComidaOrmEntity,
    EstadoTurnoOrmEntity,
    DeportologoOrmEntity,
    ProfesionalOrmEntity,
    OpcionComidaOrmEntity,
    UnidadMedidaOrmEntity,
    NutricionistaOrmEntity,
    GrupoAlimenticioOrmEntity,
    PlanAlimentacionOrmEntity,
    FormacionAcademicaOrmEntity,
    ObservacionClinicaOrmEntity,
    NivelActividadFisicaOrmEntity,
  ],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
  logging: true,
};
