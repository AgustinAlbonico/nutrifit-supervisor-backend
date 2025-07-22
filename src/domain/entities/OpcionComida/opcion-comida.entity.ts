import { Alimento } from '../Alimento/alimento.entity';
import { TipoComida } from './TipoComida';

export class OpcionComidaEntity {
  idOpcionComida: string;
  tipoComida: TipoComida;
  descripcion: string | null;
  alimentos: Alimento[];
  constructor(
    idOpcionComida: string,
    tipoComida: TipoComida,
    descripcion: string | null = null,
    alimentos: Alimento[] = [],
  ) {
    this.idOpcionComida = idOpcionComida;
    this.tipoComida = tipoComida;
    this.descripcion = descripcion;
    this.alimentos = alimentos;
  }
}
