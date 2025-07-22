import { PersonaEntity } from '../entities/Persona/persona.entity';

export interface IPersonaRepository {
  findById(id: string): Promise<PersonaEntity | null>;
}
