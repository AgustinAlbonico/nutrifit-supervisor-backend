import { FichaSaludEntity } from '../../FichaSalud/ficha-salud.entity';
import { TurnoEntity } from '../../Turno/turno.entity';
import { UsuarioEntity } from '../../Usuario/usuario.entity';
import { Genero } from '../Genero';
import { PersonaEntity } from '../persona.entity';
import { PersonaRol } from '../PersonaRol';

export class Socio extends PersonaEntity {
  fechaAlta: Date;
  fechaBaja: Date | null;
  turnos: TurnoEntity[];
  fichaSalud: FichaSaludEntity | null;

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
    fechaAlta: Date,
    fechaBaja: Date | null,
    turnos: TurnoEntity[] = [],
    fichaSalud: FichaSaludEntity | null = null,
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
    this.fechaAlta = fechaAlta;
    this.fechaBaja = fechaBaja;
    this.turnos = turnos;
    this.fichaSalud = fichaSalud;
  }

  public getRol(): string {
    return PersonaRol.SOCIO;
  }
}
