import { EstadoTurno } from 'src/domain/entities/Turno/EstadoTurno';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
