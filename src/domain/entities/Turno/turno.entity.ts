import { ObservacionClinicaEntity } from '../ObservacionClinica/observacion-clinica.entity';
import { EstadoTurno } from './EstadoTurno';

export class TurnoEntity {
  idTurno: number | null;
  fechaTurno: Date;
  HoraTurno: string;
  estadoTurno: EstadoTurno;
  observacionClinica: ObservacionClinicaEntity | null;

  constructor(
    idTurno: number | null = null,
    fechaTurno: Date,
    HoraTurno: string,
    estadoTurno: EstadoTurno,
    observacionClinica: ObservacionClinicaEntity | null = null,
  ) {
    this.idTurno = idTurno;
    this.fechaTurno = fechaTurno;
    this.HoraTurno = HoraTurno;
    this.estadoTurno = estadoTurno;
    this.observacionClinica = observacionClinica;
  }
}
