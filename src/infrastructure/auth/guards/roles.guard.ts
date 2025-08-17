import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Rol } from 'src/domain/entities/Usuario/Rol';
import { ROLE_KEY } from '../decorators/role.decorator';
import { AuthenticatedUser } from 'src/domain/entities/Usuario/authenticatedUser.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRol = this.reflector.getAllAndOverride<Rol>(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRol) {
      return true;
    }

    const user = context.switchToHttp().getRequest<AuthenticatedUser>();

    return requiredRol === user.rol;
  }
}
