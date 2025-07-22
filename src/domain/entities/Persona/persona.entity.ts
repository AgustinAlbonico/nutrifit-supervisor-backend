import { UsuarioEntity } from '../Usuario/usuario.entity';

export class PersonaEntity {
  id: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  email: string;
  telefono: string;
  usuario: UsuarioEntity | null;

  constructor(
    id: string,
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    email: string,
    telefono: string,
    usuario: UsuarioEntity | null = null,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
    this.telefono = telefono;
    this.usuario = usuario;
  }
}
