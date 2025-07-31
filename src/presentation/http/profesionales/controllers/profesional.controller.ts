import { Controller, Get } from '@nestjs/common';
import { ServerError } from 'src/domain/exceptions/custom-exceptions';

@Controller('profesional')
export class ProfesionalController {
  constructor() {}

  @Get('/')
  getEskere(): string {
    throw new ServerError();
  }
}
