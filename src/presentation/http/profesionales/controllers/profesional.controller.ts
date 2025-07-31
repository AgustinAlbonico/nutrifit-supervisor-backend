import { Controller, Get, Inject } from '@nestjs/common';
import { AppLoggerService } from 'src/infrastructure/common/logger/app-logger.service';

@Controller('profesional')
export class ProfesionalController {
  constructor(@Inject() private readonly logger: AppLoggerService) {}

  @Get('/')
  getEskere() {
    const users = [
      {
        id: 1,
        name: 'Juan',
        email: 'juan@test.com',
        age: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'María',
        email: 'maria@test.com',
        age: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return users;
  }
}
