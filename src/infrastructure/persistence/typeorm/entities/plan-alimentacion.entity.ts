import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NutricionistaOrmEntity } from './persona.entity';
import { NutricionistaEntity } from 'src/domain/entities/Persona/Profesional/Nutricionista/nutricionista.entity';
import { OpcionComidaOrmEntity } from './opcion-comida.entity';
import { OpcionComidaEntity } from 'src/domain/entities/OpcionComida/opcion-comida.entity';

@Entity('plan_alimentacion')
export class PlanAlimentacionOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_plan_alimentacion' })
  idPlanAlimentacion: number;

  @Column({ name: 'fechaCreacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'objetivo_nutricional', type: 'varchar', length: 255 })
  objetivoNutricional: string;

  @ManyToOne(
    () => NutricionistaOrmEntity,
    (nutricionista) => nutricionista.idPersona,
    {
      eager: true,
    },
  )
  nutricionista: NutricionistaEntity;

  @OneToMany(
    () => OpcionComidaOrmEntity,
    (opcionComida) => opcionComida.idOpcionComida,
    { eager: true, nullable: true },
  )
  opcionesComida: OpcionComidaEntity[];
}
