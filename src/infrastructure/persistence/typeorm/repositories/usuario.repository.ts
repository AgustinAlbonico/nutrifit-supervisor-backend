import { Injectable } from '@nestjs/common';
import { UsuarioOrmEntity } from '../entities/usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/domain/entities/Usuario/usuario.entity';
import { UsuarioRepository } from 'src/domain/entities/Usuario/usuario.repository';
import { SocioOrmEntity } from '../entities';

@Injectable()
export class UsuarioRepositoryImplementation implements UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioOrmEntity)
    private readonly userRepository: Repository<UsuarioOrmEntity>,
  ) {}

  async findByEmail(email: string): Promise<UsuarioEntity | null> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) return null;

    const { idUsuario, contraseña, rol } = user;

    const formatedUser = new UsuarioEntity(
      idUsuario,
      email,
      contraseña,
      null,
      rol,
    );

    return formatedUser;
  }

  async save(entity: UsuarioEntity): Promise<UsuarioEntity> {
    const usuarioOrmEntity = new UsuarioOrmEntity();
    usuarioOrmEntity.idUsuario = null;
    usuarioOrmEntity.email = entity.email;
    usuarioOrmEntity.contraseña = entity.contraseña;
    usuarioOrmEntity.rol = entity.rol;
    usuarioOrmEntity.fechaHoraAlta = new Date();

    if (entity.persona) {
      usuarioOrmEntity.persona = {
        idPersona: entity.persona.idPersona,
      } as SocioOrmEntity;
    }

    const usuarioCreado = await this.userRepository.save(usuarioOrmEntity);

    return usuarioCreado;
  }

  async update(id: number, entity: UsuarioEntity): Promise<UsuarioEntity> {
    return entity;
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return [];
  }
}
