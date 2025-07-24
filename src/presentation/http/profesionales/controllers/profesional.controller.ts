import { Controller, Get } from '@nestjs/common';

@Controller('profesional')
export class ProfesionalController {
  constructor() {}

  @Get('/')
  getEskere(): string {
    return 'asdasd';
  }
}
