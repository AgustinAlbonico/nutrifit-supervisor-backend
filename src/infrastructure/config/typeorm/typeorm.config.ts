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
import { TurnoOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/turno.entity';
import { GeneroOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/genero.entity';
import {
  AlergiaOrmEntity,
  FichaSaludOrmEntity,
  PatologiaOrmEntity,
} from 'src/infrastructure/persistence/typeorm/entities/ficha-salud.entity';
import { UsuarioOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/usuario.entity';
import { OpcionComidaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/opcion-comida.entity';
import { GrupoAlimenticioOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/grupo-alimenticio.entity';
import { PlanAlimentacionOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/plan-alimentacion.entity';
import { FormacionAcademicaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/formacion-academica.entity';
import { ObservacionClinicaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/observacion-clinica.entity';
import { NivelActividadFisicaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/nivel-actividad-fisica.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

export const AppDataSource = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: config.getDatabaseHost(),
  port: config.getDatabasePort(),
  username: config.getDatabaseUser(),
  password: config.getDatabasePassword(),
  database: config.getDatabaseName(),
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
    DeportologoOrmEntity,
    ProfesionalOrmEntity,
    OpcionComidaOrmEntity,
    NutricionistaOrmEntity,
    GrupoAlimenticioOrmEntity,
    PlanAlimentacionOrmEntity,
    FormacionAcademicaOrmEntity,
    ObservacionClinicaOrmEntity,
    NivelActividadFisicaOrmEntity,
  ],
  migrations: ['src/infrastructure/persistence/typeorm/migrations/*.ts'],
  //BORRAR ESTO CUANDO SAQUE LA APP A PRODUCCION
  synchronize: true,
  logging: true,
});
