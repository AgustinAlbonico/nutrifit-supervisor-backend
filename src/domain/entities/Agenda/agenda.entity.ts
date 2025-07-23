import { DiaSemana } from './dia-semana';

export class AgendaEntity {
  idAgenda: number | null;
  diasDisponibles: DiaSemana[];
  horaInicio: string;
  horaFin: string;
  duracionTurno: number;
}
