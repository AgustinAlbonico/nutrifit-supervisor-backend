// src/common/filters/app-error.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppError } from 'src/domain/exceptions/custom-exceptions';
import { ErrorCode } from 'src/domain/constants/error-codes';

// Tipado seguro para BadRequestException de class-validator
interface ValidationResponse {
  statusCode: number;
  message: string[] | string;
  error: string;
}

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
    let details: string[] | undefined = undefined;

    // ===== Errores custom del dominio =====
    if (exception instanceof AppError) {
      statusCode = exception.statusCode;
      message = exception.message;
      errorCode = exception.errorCode;

      if (statusCode >= 500) {
        this.logger.error(`[${errorCode}] ${message}`, exception.stack);
      }
    }
    // ===== Errores de validación =====
    else if (exception instanceof BadRequestException) {
      statusCode = 400;
      message = 'Error de validación';
      errorCode = ErrorCode.VALIDATION_ERROR;

      const response = exception.getResponse() as ValidationResponse;

      // Normalizamos message siempre a array de strings
      details = Array.isArray(response.message)
        ? response.message
        : [String(response.message)];

      this.logger.warn(`[${errorCode}] ${details.join(', ')}`);
    }
    // ===== Errores genéricos =====
    else {
      const e = exception as Error;
      this.logger.error(`[UNHANDLED_EXCEPTION] ${e.message}`, e.stack);
    }

    // ===== Respuesta JSON unificada =====
    res.status(statusCode).json({
      success: false,
      message,
      error: {
        code: errorCode,
        path: req.url,
        timestamp: new Date().toISOString(),
        ...(details ? { details } : {}), // solo agregamos details si existen
      },
    });
  }
}
