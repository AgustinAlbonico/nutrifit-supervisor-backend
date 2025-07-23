import { AgendaEntity } from 'src/domain/entities/Agenda/agenda.entity';
import { FormacionAcademicaEntity } from 'src/domain/entities/FormacionAcademica/formacion-academica.entity';
import { TurnoEntity } from 'src/domain/entities/Turno/turno.entity';
import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { ProfesionalEntity } from '../profesional.entity';
import { Genero } from '../../Genero';
import { PersonaRol } from '../../PersonaRol';

export class NutricionistaEntity extends ProfesionalEntity {
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
      experiencia,
      agenda,
      formacionAcademica,
      turnos,
    );
  }

  public getRol(): string {
    return PersonaRol.PROFESIONAL;
  }
}
