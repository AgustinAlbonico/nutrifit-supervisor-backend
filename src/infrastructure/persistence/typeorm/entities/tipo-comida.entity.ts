import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo_comida')
export class TipoComidaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_tipo_comida' })
  idTipoComida: number;

  @Column({ name: 'nombre', type: 'varchar', length: 50 })
  nombre: string;
}
