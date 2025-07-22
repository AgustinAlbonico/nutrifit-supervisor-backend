import { OpcionComidaEntity } from '../OpcionComida/opcion-comida.entity';
import { NutricionistaEntity } from '../Persona/Profesional/Nutricionista/nutricionista.entity';

export class PlanAlimentacionEntity {
  idPlanAlimentacion: string;
  fechaCreacion: Date;
  objetivoNutricional: string;
  opcionesAlimentarias: OpcionComidaEntity[];
  nutricionista: NutricionistaEntity;
  constructor(
    idPlanAlimentacion: string,
    fechaCreacion: Date,
    objetivoNutricional: string,
    opcionesAlimentarias: OpcionComidaEntity[] = [],
    nutricionista: NutricionistaEntity,
  ) {
    this.idPlanAlimentacion = idPlanAlimentacion;
    this.fechaCreacion = fechaCreacion;
    this.objetivoNutricional = objetivoNutricional;
    this.opcionesAlimentarias = opcionesAlimentarias;
    this.nutricionista = nutricionista;
  }
}
