import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginDto } from 'src/application/auth/dtos/login.dto';
import { LoginUseCase } from 'src/application/auth/login.use-case';
import {
  APP_LOGGER_SERVICE,
  IAppLoggerService,
} from 'src/domain/services/logger.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly loginUseCase: LoginUseCase,
    @Inject(APP_LOGGER_SERVICE) private readonly logger: IAppLoggerService,
  ) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    this.logger.log(`Intentando loguear al usuario con email: ${body.email}`);
    const res = await this.loginUseCase.execute(body);
    this.logger.log(`Login correcto para el usuario con email: ${body.email}`);
    return res;
  }
}
