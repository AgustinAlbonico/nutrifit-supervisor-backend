import { AlergiaEntity } from './alergia.entity';
import { NivelActividadFisica } from './NivelActividadFisica';
import { PatologiaEntity } from './patologia.entity';

export class FichaSaludEntity {
  idFichaSalud: number | null;
  fechaCreacion: Date;
  nivelActividadFisica: NivelActividadFisica;
  peso: number;
  altura: number;
  patologias: PatologiaEntity[];
  alergias: AlergiaEntity[];
  objetivoPersonal: string;

  constructor(
    idFichaSalud: number | null = null,
    nivelActividadFisica: NivelActividadFisica,
    peso: number,
    altura: number,
    fechaCreacion: Date = new Date(),
    patologias: PatologiaEntity[] = [],
    alergias: AlergiaEntity[] = [],
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
