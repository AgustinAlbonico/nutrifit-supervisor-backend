import { EstadoTurno } from 'src/domain/entities/Turno/EstadoTurno';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('turno')
export class TurnoOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_turno' })
  idTurno: number;

  @Column({ name: 'fecha', type: 'date' })
  fechaTurno: Date;

  @Column({ name: 'hora_turno', type: 'varchar', length: 10 })
  horaTurno: string;

  @ManyToOne(() => EstadoTurnoOrmEntity, (estado) => estado.idEstadoTurno, {
    eager: true,
  })
  estadoTurno: EstadoTurno;
}

@Entity('estado_turno')
export class EstadoTurnoOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_estado_turno' })
  idEstadoTurno: number;

  @Column({ name: 'descripcion', type: 'varchar', length: 50 })
  nombre: string;
}
