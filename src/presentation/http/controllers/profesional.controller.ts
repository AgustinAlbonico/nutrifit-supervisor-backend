import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfesionalEntity } from 'src/domain/entities/Persona/Profesional/profesional.entity';
import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { CreateUserUseCase } from 'src/application/auth/create-user.use-case';
import { ProfUseCase } from 'src/application/gestion de profesionales/prof';

@Controller('profesional')
export class ProfesionalController {
  constructor(
    private profUseCase: ProfUseCase,
    private createUserUseCase: CreateUserUseCase,
  ) {}
  @Get()
  async profMethod(): Promise<ProfesionalEntity> {
    return this.profUseCase.execute();
  }
  @Post()
  async userMethod(@Body() user: UsuarioEntity): Promise<UsuarioEntity> {
    return this.createUserUseCase.execute(user);
  }
}
