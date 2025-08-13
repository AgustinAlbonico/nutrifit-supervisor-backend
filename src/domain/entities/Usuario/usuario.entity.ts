import { PersonaEntity } from '../Persona/persona.entity';
import { RolEntity } from './rol.entity';

export class UsuarioEntity {
  email: string;
  contraseña: string;
  fechaHoraAlta: Date;
  persona: PersonaEntity | null;
  rol: RolEntity;

  constructor(
    email: string,
    contraseña: string,
    fechaHoraAlta: Date = new Date(),
    persona: PersonaEntity | null = null,
    rol: RolEntity,
  ) {
    this.email = email;
    this.contraseña = contraseña;
    this.fechaHoraAlta = fechaHoraAlta;
    this.persona = persona;
    this.rol = rol;
  }
}
