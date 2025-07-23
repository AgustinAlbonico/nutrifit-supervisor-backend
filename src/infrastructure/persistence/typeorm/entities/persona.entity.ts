import { Type } from 'class-transformer';
import {
  ChildEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';
import { GeneroOrmEntity } from './genero.entity';
import { Genero } from 'src/domain/entities/Persona/Genero';
import { UsuarioOrmEntity } from './usuario.entity';
import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { AgendaOrmEntity } from './agenda.entity';
import { AgendaEntity } from 'src/domain/entities/Agenda/agenda.entity';
import { FormacionAcademicaOrmEntity } from './formacion-academica.entity';
import { FormacionAcademicaEntity } from 'src/domain/entities/FormacionAcademica/formacion-academica.entity';
import { FichaSaludOrmEntity } from './ficha-salud.entity';
import { FichaSaludEntity } from 'src/domain/entities/FichaSalud/ficha-salud.entity';
import { PlanAlimentacionOrmEntity } from './plan-alimentacion.entity';
import { PlanAlimentacionEntity } from 'src/domain/entities/PlanAlimentacion/plan-alimentacion.entity';

@Entity('persona')
@TableInheritance({ column: { type: 'varchar', name: 'tipo_persona' } })
export abstract class PersonaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_persona' })
  idPersona: number | null;

  @Column({ name: 'nombre', type: 'varchar', length: 100 })
  nombre: string;

  @Column({ name: 'apellido', type: 'varchar', length: 100 })
  apellido: string;

  @Column({ name: 'fecha_nacimiento', type: 'date' })
  @Type(() => Date)
  fechaNacimiento: Date;

  @ManyToOne(() => GeneroOrmEntity, (genero) => genero.idGenero, {
    eager: true,
  })
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

  @OneToOne(() => UsuarioOrmEntity, (usuario) => usuario.nombreUsuario, {
    eager: true,
    nullable: true,
  })
  usuario: UsuarioEntity | null;
}

@ChildEntity()
export class SocioOrmEntity extends PersonaOrmEntity {
  @OneToOne(
    () => FichaSaludOrmEntity,
    (fichaSalud) => fichaSalud.idFichaSalud,
    {
      eager: true,
      nullable: true,
    },
  )
  fichaSalud: FichaSaludEntity | null;

  @OneToMany(
    () => PlanAlimentacionOrmEntity,
    (plan) => plan.idPlanAlimentacion,
    {
      eager: true,
      nullable: true,
    },
  )
  planesAlimentacion: PlanAlimentacionEntity[];
}

@ChildEntity()
export class AsistenteOrmEntity extends PersonaOrmEntity {}

@ChildEntity()
export abstract class ProfesionalOrmEntity extends PersonaOrmEntity {
  @Column({ name: 'matricula', type: 'varchar', length: 50, unique: true })
  matricula: string;

  @Column({ name: 'anios_experiencia', type: 'int' })
  añosExperiencia: number;

  @Column({ name: 'tarifa_sesion', type: 'decimal', precision: 10, scale: 2 })
  tarifaSesion: number;

  @OneToOne(() => AgendaOrmEntity, (agenda) => agenda.idAgenda, {
    eager: true,
    nullable: true,
  })
  agenda: AgendaEntity | null;

  @OneToMany(
    () => FormacionAcademicaOrmEntity,
    (formacion) => formacion.idFormacionAcademica,
    {
      eager: true,
      nullable: true,
    },
  )
  formacionAcademica: FormacionAcademicaEntity[];
}

@ChildEntity()
export class NutricionistaOrmEntity extends ProfesionalOrmEntity {}

@ChildEntity()
export class DeportologoOrmEntity extends ProfesionalOrmEntity {}
