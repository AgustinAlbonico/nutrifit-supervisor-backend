import { AgendaEntity } from 'src/domain/entities/Agenda/agenda.entity';
import { FormacionAcademicaEntity } from 'src/domain/entities/FormacionAcademica/formacion-academica.entity';
import { TurnoEntity } from 'src/domain/entities/Turno/turno.entity';
import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { ProfesionalEntity } from '../profesional.entity';

export class NutricionistaEntity extends ProfesionalEntity {
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
    super(
      id,
      nombre,
      apellido,
      fechaNacimiento,
      email,
      telefono,
      usuario,
      experiencia,
      agenda,
      formacionAcademica,
      turnos,
    );
  }
}
