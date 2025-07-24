import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { PersonaOrmEntity } from './persona.entity';
import { PersonaEntity } from 'src/domain/entities/Persona/persona.entity';

@Entity('usuario')
export class UsuarioOrmEntity {
  @PrimaryColumn({ name: 'email' })
  email: string;

  @Column({ name: 'contrasenia', type: 'varchar', length: 255 })
  contraseña: string;

  @Column({
    name: 'fecha_hora_alta',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fechaHoraAlta: Date;

  @OneToOne(() => PersonaOrmEntity, (persona) => persona.idPersona, {
    eager: true,
    nullable: true,
  })
  usuario: PersonaEntity | null;
}
