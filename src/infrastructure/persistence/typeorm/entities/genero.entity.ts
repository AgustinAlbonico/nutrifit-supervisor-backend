import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genero')
export class GeneroOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_genero' })
  idGenero: number;

  @Column({ name: 'descripcion', type: 'varchar', length: 50 })
  nombre: string;
}
