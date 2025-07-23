import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('unidad_medida')
export class UnidadMedidaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_unidad_medida' })
  idUnidadMedida: number;

  @Column({ name: 'nombre', type: 'varchar', length: 50, unique: true })
  nombre: string;
}
