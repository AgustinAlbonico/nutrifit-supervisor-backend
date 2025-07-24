import { Injectable } from '@nestjs/common';
import { IUsuarioRepository } from 'src/domain/entities/Usuario/usuario.repository';
import { UsuarioOrmEntity } from '../entities/usuario.entity';
import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioRepositoryImplementation implements IUsuarioRepository {
  constructor(
    @InjectRepository(UsuarioOrmEntity)
    private readonly userRepository: Repository<UsuarioOrmEntity>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/require-await
  async create(user: UsuarioEntity) {
    const { email, contraseña } = user;
    const newUser = new UsuarioOrmEntity();
    newUser.email = email;
    newUser.contraseña = contraseña
    return this.userRepository.save(newUser);
  }
}
