import { EstadoTurno } from 'src/domain/entities/Turno/EstadoTurno';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ObservacionClinicaOrmEntity } from './observacion-clinica.entity';
import { ObservacionClinicaEntity } from 'src/domain/entities/ObservacionClinica/observacion-clinica.entity';
import { NutricionistaOrmEntity, SocioOrmEntity } from './persona.entity';
import { SocioEntity } from 'src/domain/entities/Persona/Socio/socio.entity';
import { NutricionistaEntity } from 'src/domain/entities/Persona/Nutricionista/nutricionista.entity';

@Entity('turno')
export class TurnoOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_turno' })
  idTurno: number;

  @Column({ name: 'fecha', type: 'date' })
  fechaTurno: Date;

  @Column({ name: 'hora_turno', type: 'varchar', length: 10 })
  horaTurno: string;

  @Column({ name: 'estado', type: 'enum', enum: EstadoTurno })
  estadoTurno: EstadoTurno;

  @OneToOne(() => ObservacionClinicaOrmEntity, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'id_observacion' })
  observacionClinica?: ObservacionClinicaEntity;

  @ManyToOne(() => SocioOrmEntity, (socio) => socio.turnos, {
    nullable: false,
  })
  @JoinColumn({ name: 'id_socio' })
  socio: SocioEntity;

  @ManyToOne(
    () => NutricionistaOrmEntity,
    (nutricionista) => nutricionista.turnos,
    {
      nullable: false,
    },
  )
  @JoinColumn({ name: 'id_nutricionista' })
  nutricionista: NutricionistaEntity;
}
