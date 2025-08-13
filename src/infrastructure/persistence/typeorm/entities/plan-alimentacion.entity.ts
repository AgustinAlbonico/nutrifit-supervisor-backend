import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NutricionistaOrmEntity, SocioOrmEntity } from './persona.entity';
import { NutricionistaEntity } from 'src/domain/entities/Persona/Nutricionista/nutricionista.entity';
import { OpcionComidaOrmEntity } from './opcion-comida.entity';
import { OpcionComidaEntity } from 'src/domain/entities/OpcionComida/opcion-comida.entity';
import { SocioEntity } from 'src/domain/entities/Persona/Socio/socio.entity';

@Entity('plan_alimentacion')
export class PlanAlimentacionOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_plan_alimentacion' })
  idPlanAlimentacion: number;

  @Column({ name: 'fechaCreacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'objetivo_nutricional', type: 'varchar', length: 255 })
  objetivoNutricional: string;

  @ManyToOne(() => SocioOrmEntity, (socio) => socio.planesAlimentacion, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_socio' })
  socio: SocioEntity;

  @ManyToOne(() => NutricionistaOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_nutricionista' })
  nutricionista: NutricionistaEntity;

  @OneToMany(
    () => OpcionComidaOrmEntity,
    (opcionComida) => opcionComida.planAlimentacion,
    { eager: true, nullable: true },
  )
  opcionesComida: OpcionComidaEntity[];
}
