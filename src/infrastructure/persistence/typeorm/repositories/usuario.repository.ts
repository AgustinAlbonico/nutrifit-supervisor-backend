import { Injectable } from '@nestjs/common';
import { IUsuarioRepository } from 'src/domain/entities/Usuario/usuario.repository';
import { UsuarioOrmEntity } from '../entities/usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuarioRepositoryImplementation implements IUsuarioRepository {
  constructor(
    @InjectRepository(UsuarioOrmEntity)
    private readonly userRepository: Repository<UsuarioOrmEntity>,
  ) {}
}
