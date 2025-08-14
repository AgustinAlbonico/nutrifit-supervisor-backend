import { SetMetadata } from '@nestjs/common';
import { Rol } from 'src/domain/entities/Usuario/Rol';

export const ROLE_KEY = 'role';
export const Role = (role: Rol) => SetMetadata(ROLE_KEY, role);
