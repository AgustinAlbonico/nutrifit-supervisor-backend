import { AgendaEntity } from '../../Agenda/agenda.entity';
import { FormacionAcademicaEntity } from '../../FormacionAcademica/formacion-academica.entity';
import { TurnoEntity } from '../../Turno/turno.entity';
import { UsuarioEntity } from '../../Usuario/usuario.entity';
import { Genero } from '../Genero';
import { PersonaEntity } from '../persona.entity';

export abstract class ProfesionalEntity extends PersonaEntity {
  matricula: string;
  añosExperiencia: number;
  agenda: AgendaEntity | null;
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
    usuario: UsuarioEntity | null = null,
    experiencia: number,
    agenda: AgendaEntity | null = null,
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
      usuario,
    );
    this.añosExperiencia = experiencia;
    this.agenda = agenda;
    this.formacionAcademica = formacionAcademica;
    this.turnos = turnos;
  }
}
