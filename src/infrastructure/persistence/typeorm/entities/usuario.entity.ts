import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonaOrmEntity } from './persona.entity';
import { PersonaEntity } from 'src/domain/entities/Persona/persona.entity';
import { Rol } from 'src/domain/entities/Usuario/Rol';

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

  @Column({ name: 'rol', type: 'enum', enum: Rol })
  rol: Rol;
}
