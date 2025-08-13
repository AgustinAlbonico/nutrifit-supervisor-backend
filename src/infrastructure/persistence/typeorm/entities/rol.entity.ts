import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioOrmEntity } from './usuario.entity';

@Entity('rol')
export class RolOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_rol' })
  idRol: number;

  @Column()
  nombre: string;

  @OneToMany(() => UsuarioOrmEntity, (usuario) => usuario.rol)
  usuarios: UsuarioEntity[];
}
