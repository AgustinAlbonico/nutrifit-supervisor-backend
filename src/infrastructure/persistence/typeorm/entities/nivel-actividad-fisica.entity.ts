import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nivel_actividad_fisica')
export class NivelActividadFisicaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_nivel_actividad_fisica' })
  idNivelActividadFisica: number;

  @Column({ name: 'descripcion', type: 'varchar', length: 255 })
  descripcion: string;
}
