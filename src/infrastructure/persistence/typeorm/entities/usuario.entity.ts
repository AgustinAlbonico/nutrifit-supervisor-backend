import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('usuario')
export class UsuarioOrmEntity {
  @PrimaryColumn({ name: 'nombre_usuario' })
  nombreUsuario: string;

  @Column({ name: 'contrasenia', type: 'varchar', length: 255 })
  contraseña: string;

  @Column({
    name: 'fecha_hora_alta',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fechaHoraAlta: string;
}
