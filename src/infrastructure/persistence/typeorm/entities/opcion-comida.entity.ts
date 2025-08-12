import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TipoComida } from 'src/domain/entities/OpcionComida/TipoComida';
import { Alimento } from 'src/domain/entities/Alimento/alimento.entity';
import { AlimentoOrmEntity } from './alimento.entity';

@Entity('opcion_comida')
export class OpcionComidaOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_opcion_comida' })
  idOpcionComida: number;

  @Column({ name: 'comentarios', type: 'varchar', length: 255, nullable: true })
  comentarios: string | null;

  @Column({ name: 'tipo_comida', type: 'enum', enum: TipoComida })
  tipoComida: TipoComida;

  @ManyToMany(() => AlimentoOrmEntity, (alimento) => alimento.idAlimento, {
    eager: true,
    nullable: true,
  })
  @JoinTable({
    name: 'opcion_comida_alimento',
    joinColumn: {
      name: 'id_opcion_comida',
      referencedColumnName: 'idOpcionComida',
    },
    inverseJoinColumn: {
      name: 'id_alimento',
      referencedColumnName: 'idAlimento',
    },
  })
  alimentos: Alimento[];
}
