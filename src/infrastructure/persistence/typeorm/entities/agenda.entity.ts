import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('agenda')
export class AgendaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_agenda' })
  idAgenda: number;

  @ManyToMany(() => DiaSemanaOrmEntity, { eager: true })
  @JoinTable({
    name: 'agenda_dias',
    joinColumn: {
      name: 'id_agenda',
      referencedColumnName: 'idAgenda',
    },
    inverseJoinColumn: {
      name: 'id_dia_semana',
      referencedColumnName: 'idDiaSemana',
    },
  })
  diasDisponibles: DiaSemanaOrmEntity[];

  @Column({ type: 'time', name: 'hora_inicio' })
  horaInicio: string;

  @Column({ type: 'time', name: 'hora_fin' })
  horaFin: string;

  @Column({ type: 'int', name: 'duracion_turno' })
  duracionTurno: number;
}

@Entity('dia_semana')
export class DiaSemanaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_dia_semana' })
  idDiaSemana: number;

  @Column({ type: 'varchar', length: 20, unique: true })
  nombre: string;
}
