import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rol')
export class RolOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_rol' })
  idRol: number;

  @Column()
  nombre: string;
}
