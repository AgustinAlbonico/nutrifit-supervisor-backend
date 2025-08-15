import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AppLoggerService } from 'src/infrastructure/common/logger/app-logger.service';

@Controller('auth')
export class AuthController {
  constructor(@Inject() private readonly logger: AppLoggerService) {}

  @Post('login')
  async login(@Body() request: { email: string; password: string }) {
    console.log(request);
    return null;
  }
}
