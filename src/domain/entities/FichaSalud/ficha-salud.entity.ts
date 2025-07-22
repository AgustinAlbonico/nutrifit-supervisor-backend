import { NivelActividadFisica } from './NivelActividadFisica';

export class FichaSaludEntity {
  idFichaSalud: string;
  fechaCreacion: Date;
  nivelActividadFisica: NivelActividadFisica;
  peso: number;
  altura: number;
  patologias: string[];
  alergias: string[];
  objetivoPersonal: string;

  constructor(
    idFichaSalud: string,
    fechaCreacion: Date,
    nivelActividadFisica: NivelActividadFisica,
    peso: number,
    altura: number,
    patologias: string[] = [],
    alergias: string[] = [],
    objetivoPersonal: string,
  ) {
    this.idFichaSalud = idFichaSalud;
    this.fechaCreacion = fechaCreacion;
    this.nivelActividadFisica = nivelActividadFisica;
    this.peso = peso;
    this.altura = altura;
    this.patologias = patologias;
    this.alergias = alergias;
    this.objetivoPersonal = objetivoPersonal;
  }
}
