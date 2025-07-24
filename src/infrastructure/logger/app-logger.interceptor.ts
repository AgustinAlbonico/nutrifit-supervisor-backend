// src/infrastructure/logger/logging.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  LoggerService,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest<Request>();

    const ip = this.getIP(request);
    const method = request.method;
    const url = request.url;

    this.logger.log(
      `--> Incoming Request on ${url}, method=${method}, ip=${ip}`,
    );

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - now;
        this.logger.log(
          `<-- End Request for ${url}, method=${method}, ip=${ip} duration=${duration}ms`,
        );
      }),
    );
  }

  private getIP(request: Request): string {
    const forwarded = request.headers['x-forwarded-for'];
    let ip: string;

    if (typeof forwarded === 'string') {
      ip = forwarded.split(',')[0].trim();
    } else {
      ip = request.socket.remoteAddress || '';
    }

    return ip.replace('::ffff:', '');
  }
}
