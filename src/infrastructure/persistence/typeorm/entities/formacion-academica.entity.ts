import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('formacion_academica')
export class FormacionAcademicaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_formacion_academica' })
  idFormacionAcademica: number;

  @Column({ name: 'titulo', type: 'varchar', length: 255 })
  titulo: string;

  @Column({ name: 'institucion', type: 'varchar', length: 255 })
  institucion: string;

  @Column({ name: 'anio_inicio', type: 'int' })
  añoInicio: number;

  @Column({ name: 'anio_fin', type: 'int' })
  añoFin: number;

  @Column({ name: 'nivel', type: 'varchar', length: 50 })
  nivel: string;
}
