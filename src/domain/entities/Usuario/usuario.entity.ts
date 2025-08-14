import { PersonaEntity } from '../Persona/persona.entity';
import { Rol } from './Rol';

export class UsuarioEntity {
  email: string;
  contraseña: string;
  fechaHoraAlta: Date;
  persona: PersonaEntity | null;
  rol: Rol;

  constructor(
    email: string,
    contraseña: string,
    fechaHoraAlta: Date = new Date(),
    persona: PersonaEntity | null = null,
    rol: Rol,
  ) {
    this.email = email;
    this.contraseña = contraseña;
    this.fechaHoraAlta = fechaHoraAlta;
    this.persona = persona;
    this.rol = rol;
  }
}
