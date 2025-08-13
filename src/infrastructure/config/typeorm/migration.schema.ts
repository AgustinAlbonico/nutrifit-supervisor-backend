import 'reflect-metadata';
import { AgendaOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/agenda.entity';
import { AlimentoOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/alimento.entity';
import {
  AsistenteOrmEntity,
  NutricionistaOrmEntity,
  PersonaOrmEntity,
  SocioOrmEntity,
} from 'src/infrastructure/persistence/typeorm/entities/persona.entity';
import { TurnoOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/turno.entity';
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
import { DataSource } from 'typeorm';
import { RolOrmEntity } from 'src/infrastructure/persistence/typeorm/entities/rol.entity';

export const AppMigrationDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nutrifit_supervisor',
  entities: [
    AgendaOrmEntity,
    AlimentoOrmEntity,
    SocioOrmEntity,
    TurnoOrmEntity,
    AlergiaOrmEntity,
    PersonaOrmEntity,
    UsuarioOrmEntity,
    AsistenteOrmEntity,
    PatologiaOrmEntity,
    FichaSaludOrmEntity,
    OpcionComidaOrmEntity,
    NutricionistaOrmEntity,
    GrupoAlimenticioOrmEntity,
    PlanAlimentacionOrmEntity,
    FormacionAcademicaOrmEntity,
    ObservacionClinicaOrmEntity,
    RolOrmEntity,
  ],
  migrations: ['src/infrastructure/persistence/typeorm/migrations/*.ts'],
  synchronize: true,
  logging: true,
});
