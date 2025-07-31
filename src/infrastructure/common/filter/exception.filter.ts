// src/common/filters/app-error.filter.ts
import { ExceptionFilter, Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppError } from 'src/domain/exceptions/custom-exceptions';
import { ErrorCode } from 'src/domain/constants/error-codes';

@Catch()
export class AppErrorFilter implements ExceptionFilter {
  private readonly logger = new Logger(AppErrorFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    let statusCode = 500;
    let message = 'Error interno del servidor';
    let errorCode = ErrorCode.SERVER_ERROR;

    if (exception instanceof AppError) {
      statusCode = exception.statusCode;
      message = exception.message;
      errorCode = exception.errorCode;

      if (statusCode >= 500) {
        this.logger.error(`[${errorCode}] ${message}`, exception.stack);
      }
    } else {
      this.logger.error(
        `[UNHANDLED_EXCEPTION] ${message}`,
        (exception as Error)?.stack,
      );
    }

    // Respuesta JSON unificada
    res.status(statusCode).json({
      success: false,
      message,
      error: {
        code: errorCode,
        path: req.url,
        timestamp: new Date().toISOString(),
      },
    });
  }
}
