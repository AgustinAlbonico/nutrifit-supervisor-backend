export class FormacionAcademicaEntity {
  id: string;
  titulo: string;
  institucion: string;
  fechaInicio: Date;
  fechaFin: Date;
  nivel: string;

  constructor(
    id: string,
    titulo: string,
    institucion: string,
    fechaInicio: Date,
    fechaFin: Date,
    nivel: string,
  ) {
    this.id = id;
    this.titulo = titulo;
    this.institucion = institucion;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.nivel = nivel;
  }
}
