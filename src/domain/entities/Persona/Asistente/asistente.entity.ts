import { UsuarioEntity } from '../../Usuario/usuario.entity';
import { Genero } from '../Genero';
import { PersonaEntity } from '../persona.entity';
import { PersonaRol } from '../PersonaRol';

export class AsistenteEntity extends PersonaEntity {
  constructor(
    idPersona: number | null = null,
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    telefono: string,
    genero: Genero,
    direccion: string,
    ciudad: string,
    provincia: string,
    usuario: UsuarioEntity | null = null,
  ) {
    super(
      idPersona,
      nombre,
      apellido,
      fechaNacimiento,
      telefono,
      genero,
      direccion,
      ciudad,
      provincia,
      usuario,
    );
  }

  public getRol(): string {
    return PersonaRol.ASISTENTE;
  }
}
