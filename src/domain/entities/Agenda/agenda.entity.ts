import { DiaSemana } from './dia-semana';

export class AgendaEntity {
  idAgenda: string;
  diasDisponibles: DiaSemana[];
  horaInicio: string;
  horaFin: string;
  duracionTurno: number;
}
