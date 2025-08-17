import { PersonaEntity } from '../Persona/persona.entity';
import { Rol } from './Rol';

export class UsuarioEntity {
  idUsuario: number | null;
  email: string;
  contraseña: string;
  fechaHoraAlta: Date;
  persona: PersonaEntity | null;
  rol: Rol;

  constructor(
    idUsuario: number | null = null,
    email: string,
    contraseña: string,
    persona: PersonaEntity | null = null,
    rol: Rol,
  ) {
    this.idUsuario = idUsuario;
    this.email = email;
    this.contraseña = contraseña;
    this.fechaHoraAlta = new Date();
    this.persona = persona;
    this.rol = rol;
  }
}
