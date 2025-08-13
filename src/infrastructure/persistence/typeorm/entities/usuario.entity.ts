import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonaOrmEntity } from './persona.entity';
import { PersonaEntity } from 'src/domain/entities/Persona/persona.entity';
import { RolOrmEntity } from './rol.entity';
import { RolEntity } from 'src/domain/entities/Usuario/rol.entity';

@Entity('usuario')
export class UsuarioOrmEntity {
  @PrimaryGeneratedColumn({ name: 'id_usuario' })
  idUsuario: number;

  @Column({ name: 'email', type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ name: 'contrasenia', type: 'varchar', length: 255 })
  contraseña: string;

  @Column({
    name: 'fecha_hora_alta',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fechaHoraAlta: Date;

  @OneToOne(() => PersonaOrmEntity, {
    eager: true,
  })
  @JoinColumn({ name: 'id_persona' })
  persona: PersonaEntity;

  @ManyToOne(() => RolOrmEntity, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'id_rol' })
  rol: RolEntity;
}
