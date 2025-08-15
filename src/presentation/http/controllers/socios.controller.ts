import { Controller, Get, Inject } from '@nestjs/common';
import { AppLoggerService } from 'src/infrastructure/common/logger/app-logger.service';

@Controller('socio')
export class SocioController {
  constructor(@Inject() private readonly logger: AppLoggerService) {}
}
