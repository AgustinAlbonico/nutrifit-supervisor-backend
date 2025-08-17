import { Body, Controller, Inject, Post } from '@nestjs/common';
import { RegistrarSocioDto } from 'src/application/socios/dtos/registrarSocio.dto';
import { RegistrarSocioUseCase } from 'src/application/socios/registrarSocio.use-case';
import { APP_LOGGER_SERVICE } from 'src/domain/services/logger.service';
import { AppLoggerService } from 'src/infrastructure/common/logger/app-logger.service';

@Controller('socio')
export class SocioController {
  constructor(
    private readonly registrarSocioUseCase: RegistrarSocioUseCase,
    @Inject(APP_LOGGER_SERVICE)
    private readonly logger: AppLoggerService,
  ) {}

  @Post('registrar')
  async registrarSocio(@Body() registrarSocioDto: RegistrarSocioDto) {
    this.logger.log('Registrando Socio' + registrarSocioDto.email);
    const socioCreado =
      await this.registrarSocioUseCase.execute(registrarSocioDto);
    return socioCreado;
  }
}
