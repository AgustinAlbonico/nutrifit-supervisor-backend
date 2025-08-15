import { SetMetadata } from '@nestjs/common';
import { Rol as RolEnum } from 'src/domain/entities/Usuario/Rol';

export const ROLE_KEY = 'rol';
export const Rol = (rol: RolEnum) => SetMetadata(ROLE_KEY, rol);
