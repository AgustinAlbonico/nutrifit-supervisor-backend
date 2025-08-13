import { FichaSaludEntity } from '../../FichaSalud/ficha-salud.entity';
import { PlanAlimentacionEntity } from '../../PlanAlimentacion/plan-alimentacion.entity';
import { TurnoEntity } from '../../Turno/turno.entity';
import { Genero } from '../Genero';
import { PersonaEntity } from '../persona.entity';

export class SocioEntity extends PersonaEntity {
  fechaAlta: Date;
  fechaBaja: Date | null;
  turnos: TurnoEntity[];
  fichaSalud: FichaSaludEntity | null;
  planesAlimentacion: PlanAlimentacionEntity[] | null;

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
    fechaAlta: Date,
    fechaBaja: Date | null,
    turnos: TurnoEntity[] = [],
    fichaSalud: FichaSaludEntity | null = null,
    planesAlimentacion: PlanAlimentacionEntity[] | null = null,
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
    );
    this.fechaAlta = fechaAlta;
    this.fechaBaja = fechaBaja;
    this.turnos = turnos;
    this.fichaSalud = fichaSalud;
    this.planesAlimentacion = planesAlimentacion;
  }
}
