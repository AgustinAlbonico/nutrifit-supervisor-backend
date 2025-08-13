import { SetMetadata } from '@nestjs/common';
import { PersonaRol } from 'src/domain/entities/Usuario/rol.entity';

export const ROLE_KEY = 'role';
export const Role = (role: PersonaRol) => SetMetadata(ROLE_KEY, role);
