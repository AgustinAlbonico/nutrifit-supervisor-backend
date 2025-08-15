import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginUseCase } from 'src/application/auth/login.use-case';
import { AppLoggerService } from 'src/infrastructure/common/logger/app-logger.service';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject() private readonly logger: AppLoggerService,
    private readonly loginUseCase: LoginUseCase,
  ) {}

  @Post('login')
  async login(@Body() request: { email: string; password: string }) {
    return this.loginUseCase.execute(request);
  }
}
