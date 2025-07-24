import { Injectable } from '@nestjs/common';
import { UseCase } from '../shared/use-case.base';
import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { IUsuarioRepository } from 'src/domain/entities/Usuario/usuario.repository';

@Injectable()
export class CreateUserUseCase implements UseCase<UsuarioEntity> {
  constructor(private readonly usuarioRepository: IUsuarioRepository) {}

  async execute(user: UsuarioEntity) {
    const { email, contraseña } = user;
    const newUser = new UsuarioEntity(email, contraseña);
    const result = await this.usuarioRepository.create(newUser);
    return result;
  }
}
