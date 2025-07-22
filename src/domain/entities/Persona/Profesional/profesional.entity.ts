import { AgendaEntity } from '../../Agenda/agenda.entity';
import { FormacionAcademicaEntity } from '../../FormacionAcademica/formacion-academica.entity';
import { TurnoEntity } from '../../Turno/turno.entity';
import { UsuarioEntity } from '../../Usuario/usuario.entity';
import { PersonaEntity } from '../persona.entity';

export class ProfesionalEntity extends PersonaEntity {
  añosExperiencia: number;
  telefono: string;
  agenda: AgendaEntity | null;
  formacionAcademica: FormacionAcademicaEntity[];
  turnos: TurnoEntity[];

  constructor(
    id: string,
    nombre: string,
    apellido: string,
    fechaNacimiento: Date,
    email: string,
    telefono: string,
    usuario: UsuarioEntity | null = null,
    experiencia: number,
    agenda: AgendaEntity | null = null,
    formacionAcademica: FormacionAcademicaEntity[] = [],
    turnos: TurnoEntity[] = [],
  ) {
    super(id, nombre, apellido, fechaNacimiento, email, telefono, usuario);
    this.añosExperiencia = experiencia;
    this.email = email;
    this.telefono = telefono;
    this.agenda = agenda;
    this.formacionAcademica = formacionAcademica;
    this.turnos = turnos;
  }
}
