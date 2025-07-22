export class ObservacionClinicaEntity {
  idObservacion: string;
  fechaObservacion: Date;
  horaObservacion: string;
  comentario: string;
  peso: number;
  altura: number;
  imc: number;
  objetivosSocio: string;
  sugerencias: string | null;
  habitosSocio: string | null;
  circunferenciaCintura: number;

  constructor(
    id: string,
    fechaObservacion: Date,
    horaObservacion: string,
    comentario: string,
    peso: number,
    altura: number,
    imc: number,
    objetivosSocio: string,
    sugerencias: string | null = null,
    habitosSocio: string | null = null,
    circunferenciaCintura: number,
  ) {
    this.idObservacion = id;
    this.fechaObservacion = fechaObservacion;
    this.horaObservacion = horaObservacion;
    this.comentario = comentario;
    this.peso = peso;
    this.altura = altura;
    this.imc = imc;
    this.objetivosSocio = objetivosSocio;
    this.sugerencias = sugerencias;
    this.habitosSocio = habitosSocio;
    this.circunferenciaCintura = circunferenciaCintura;
  }
}
