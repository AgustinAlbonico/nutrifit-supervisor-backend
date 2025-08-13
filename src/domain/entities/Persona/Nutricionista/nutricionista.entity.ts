import { AgendaEntity } from '../../Agenda/agenda.entity';
import { FormacionAcademicaEntity } from '../../FormacionAcademica/formacion-academica.entity';
import { TurnoEntity } from '../../Turno/turno.entity';
import { Genero } from '../Genero';
import { PersonaEntity } from '../persona.entity';

export abstract class NutricionistaEntity extends PersonaEntity {
  matricula: string;
  añosExperiencia: number;
  agendas: AgendaEntity[];
  formacionAcademica: FormacionAcademicaEntity[];
  turnos: TurnoEntity[];

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
    experiencia: number,
    agendas: AgendaEntity[] = [],
    formacionAcademica: FormacionAcademicaEntity[] = [],
    turnos: TurnoEntity[] = [],
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
    this.añosExperiencia = experiencia;
    this.agendas = agendas;
    this.formacionAcademica = formacionAcademica;
    this.turnos = turnos;
  }
}
