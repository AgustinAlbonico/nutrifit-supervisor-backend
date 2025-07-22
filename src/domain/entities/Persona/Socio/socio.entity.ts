import { FichaSaludEntity } from '../../FichaSalud/ficha-salud.entity';
import { TurnoEntity } from '../../Turno/turno.entity';
import { UsuarioEntity } from '../../Usuario/usuario.entity';
import { PersonaEntity } from '../persona.entity';

export class Socio extends PersonaEntity {
  fechaAlta: Date;
  fechaBaja: Date | null;
  turnos: TurnoEntity[];
  fichaSalud: FichaSaludEntity | null;

  constructor(
    id: string,
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    email: string,
    telefono: string,
    usuario: UsuarioEntity | null = null,
    fechaAlta: Date,
    fechaBaja: Date | null,
    turnos: TurnoEntity[] = [],
    fichaSalud: FichaSaludEntity | null = null,
  ) {
    super(id, nombre, apellido, fechaNacimiento, email, telefono, usuario);
    this.fechaAlta = fechaAlta;
    this.fechaBaja = fechaBaja;
    this.turnos = turnos;
    this.fichaSalud = fichaSalud;
  }
}
