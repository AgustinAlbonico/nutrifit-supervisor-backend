import { Type } from 'class-transformer';
import {
  ChildEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';
import { Genero } from 'src/domain/entities/Persona/Genero';
import { AgendaOrmEntity } from './agenda.entity';
import { AgendaEntity } from 'src/domain/entities/Agenda/agenda.entity';
import { FormacionAcademicaOrmEntity } from './formacion-academica.entity';
import { FormacionAcademicaEntity } from 'src/domain/entities/FormacionAcademica/formacion-academica.entity';
import { FichaSaludOrmEntity } from './ficha-salud.entity';
import { FichaSaludEntity } from 'src/domain/entities/FichaSalud/ficha-salud.entity';
import { PlanAlimentacionOrmEntity } from './plan-alimentacion.entity';
import { PlanAlimentacionEntity } from 'src/domain/entities/PlanAlimentacion/plan-alimentacion.entity';
import { UsuarioOrmEntity } from './usuario.entity';
import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { TurnoOrmEntity } from './turno.entity';
import { TurnoEntity } from 'src/domain/entities/Turno/turno.entity';

@Entity('persona')
@TableInheritance({ column: { type: 'varchar', name: 'tipo_persona' } })
export abstract class PersonaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_persona' })
  idPersona: number;

  @Column({ name: 'nombre', type: 'varchar', length: 100 })
  nombre: string;

  @Column({ name: 'apellido', type: 'varchar', length: 100 })
  apellido: string;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  @Type(() => Date)
  fechaNacimiento: Date;

  @Column({ name: 'genero', type: 'enum', enum: Genero })
  genero: Genero;

  @Column({ name: 'email', type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ name: 'telefono', type: 'varchar', length: 15 })
  telefono: string;

  @Column({ name: 'direccion', type: 'varchar', length: 255 })
  direccion: string;

  @Column({ name: 'ciudad', type: 'varchar', length: 100 })
  ciudad: string;

  @Column({ name: 'provincia', type: 'varchar', length: 100 })
  provincia: string;

  @OneToOne(() => UsuarioOrmEntity, {
    nullable: false,
  })
  usuario: UsuarioEntity;
}

@ChildEntity()
export class SocioOrmEntity extends PersonaOrmEntity {
  @OneToOne(() => FichaSaludOrmEntity, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'id_ficha_salud' })
  fichaSalud?: FichaSaludEntity;

  @OneToMany(() => PlanAlimentacionOrmEntity, (plan) => plan.socio, {
    eager: true,
    nullable: true,
  })
  planesAlimentacion: PlanAlimentacionEntity[] | null;

  @OneToMany(() => TurnoOrmEntity, (turno) => turno.socio, {
    eager: true,
    nullable: true,
  })
  turnos: TurnoEntity[] | null;
}

@ChildEntity()
export class AsistenteOrmEntity extends PersonaOrmEntity {}

@ChildEntity()
export abstract class NutricionistaOrmEntity extends PersonaOrmEntity {
  @Column({ name: 'matricula', type: 'varchar', length: 50, unique: true })
  matricula: string;

  @Column({ name: 'anios_experiencia', type: 'int' })
  añosExperiencia: number;

  @Column({ name: 'tarifa_sesion', type: 'decimal', precision: 10, scale: 2 })
  tarifaSesion: number;

  @OneToMany(() => AgendaOrmEntity, (agenda) => agenda.nutricionista, {
    eager: true,
    nullable: true,
  })
  agenda?: AgendaEntity[];

  @OneToMany(
    () => FormacionAcademicaOrmEntity,
    (formacion) => formacion.nutricionista,
    {
      eager: true,
      nullable: true,
    },
  )
  formacionAcademica: FormacionAcademicaEntity[];

  @OneToMany(() => PlanAlimentacionOrmEntity, (plan) => plan.nutricionista, {
    eager: true,
    nullable: true,
  })
  planesAlimentacion: PlanAlimentacionEntity[] | null;

  @OneToMany(() => TurnoOrmEntity, (turno) => turno.nutricionista, {
    eager: true,
    nullable: true,
  })
  turnos: TurnoEntity[] | null;
}
