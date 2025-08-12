import { SetMetadata } from '@nestjs/common';
import { PersonaRol } from 'src/domain/entities/Persona/PersonaRol';

export const ROLE_KEY = 'role';
export const Role = (role: PersonaRol) => SetMetadata(ROLE_KEY, role);
