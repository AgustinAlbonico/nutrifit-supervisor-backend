// infrastructure/guards/jwt-auth.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { IJwtService } from 'src/domain/services/jwt.service';
import { JWT_SERVICE } from 'src/domain/services/jwt.service';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(@Inject(JWT_SERVICE) private readonly jwtService: IJwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const authHeader = req.headers['authorization'] as string;
    if (!authHeader) throw new UnauthorizedException('No token proporcionado');

    const [, token] = authHeader.split(' ');
    try {
      // req.user = this.jwtService.verify(token);
      return true;
    } catch {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
